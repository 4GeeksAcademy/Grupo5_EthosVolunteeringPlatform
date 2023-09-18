from google_auth_oauthlib.flow import Flow
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
import os.path
import json

"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity, create_access_token
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

#for credentials
SCOPES = ['https://www.googleapis.com/auth/calendar']
credentials_file = os.path.join(os.path.dirname(os.path.realpath(__file__)))
flow = Flow.from_client_secrets_file(f"{credentials_file}/credentials.json",
                                     scopes=SCOPES,
                                     redirect_uri='https://crispy-enigma-v9965q55wqgh5j-3000.app.github.dev/callback')


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# For Google API integration



@api.route('/callback')
@jwt_required()
def callback():
    current_user_id = get_jwt_identity()
    user = User.query.filter_by(id=current_user_id['id']).first()
    if user:
        # Especifica el estado cuando creas el objeto flow para que pueda validarse
        # en el intercambio del código de autorización por un token de acceso
        # Use the authorization server's response to fetch the OAuth 2.0 tokens.
        authorization_response = request.url
        flow.fetch_token(authorization_response=authorization_response)
        # Ahora tienes un token de acceso y un token de actualización en `flow.credentials`
        # Puedes almacenar esto en la base de datos asociado con el usuario
        try:
            new_credentials = flow.credentials.to_json()
            new_credentials_dict = json.loads(new_credentials)
            existing_credentials = user.get_credentials()
            if existing_credentials is not None:
                existing_credentials_dict = existing_credentials
            else:
                existing_credentials_dict = {}
            # Si no hay un nuevo refresh_token, mantener el antiguo
            if 'refresh_token' not in new_credentials_dict and 'refresh_token' in existing_credentials_dict:
                new_credentials_dict['refresh_token'] = existing_credentials_dict['refresh_token']
            # Guardar las credenciales actualizadas en la base de datos
            print(type(new_credentials_dict))
            user.set_credentials(json.dumps(new_credentials_dict))
            db.session.commit()
            return jsonify({"message": "Authorization completed"}), 200
        except Exception as error:
            print(error)
            print(error.args)
            db.session.rollback()
            return jsonify({"message": "Server error"}), 500
    return jsonify({"message": "User not found"}), 404

# Create event route
@api.route('/create-event', methods=['POST'])
@jwt_required()
def create_event():
    current_user_id = get_jwt_identity()
    print(current_user_id)
    user = User.query.filter_by(id=current_user_id['id']).first()
    if not user:
        return jsonify({"message": "User not found"}), 404
    credentials_dict = user.get_credentials() or {}
    if 'refresh_token' in credentials_dict:
        credentials = Credentials.from_authorized_user_info(
            credentials_dict, scopes=SCOPES)
        if credentials.expired:
            # Guarda el refresh_token actual para asegurarte de que no se pierda
            current_refresh_token = credentials.refresh_token
            try:
                # Refresca las credenciales
                credentials.refresh(Request())
            except Exception as error:
                print(f"Token has been expired or revoked. {error}")
                authorization_url, state = flow.authorization_url(access_type='offline', included_granted_scopes='true')
                return jsonify({"authorization_url": authorization_url}), 403
            # Convierte las credenciales actualizadas a un diccionario
            updated_credentials_dict = json.loads(credentials.to_json())
            # Si no hay un nuevo refresh_token, mantener el antiguo
            if 'refresh_token' not in updated_credentials_dict:
                updated_credentials_dict['refresh_token'] = current_refresh_token
            try:
                # Actualiza las credenciales en la base de datos
                user.set_credentials(json.dumps(updated_credentials_dict))
                db.session.commit()
                print("updated credentials")
            except Exception as error:
                print(f"Error trying to update the token: {error}")
                db.session.rollback()
        try:
            event_data = request.json
            print(event_data)
            service = build('calendar', 'v3', credentials=credentials)
            event = service.events().insert(calendarId='primary', body=event_data).execute()
            return jsonify({'message': f'Evento creado con éxito: {event["htmlLink"]}'}), 200
        except Exception as e:
            print(f"Error creating event: {e}")
            return jsonify({'message': 'Error creating event'}), 500
    else:
        authorization_url, state = flow.authorization_url(
            access_type='offline', included_granted_scopes='true')
        return jsonify({"authorization_url": authorization_url}), 403








