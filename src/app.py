"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands

from api.models import db, User, Event, Role, Attendance
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity, create_access_token
from datetime import datetime, timedelta
from flask_mail import Mail, Message


# from models import Person

# from models import Person
ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False


# flask mail
app.config.update(dict(
    DEBUG=False,
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=587,
    MAIL_USE_TLS=True,
    MAIL_USE_SSL=False,
    MAIL_USERNAME='alopez70828@gmail.com',
    MAIL_PASSWORD='rpgmgktavmmdtded'
))
mail = Mail(app)


# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(

        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


# duracion del token
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(seconds=3600)

# inicializar jwt
jwt = JWTManager(app)


MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints


@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file


@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response


# endpoint to user register
@app.route('/register', methods=['POST'])
def register():
    data = request.json

    if data is None or not data:
        return jsonify({'error': 'No Json data provided'}), 400

    # does user exists?
    user = User.query.filter_by(email=data['email']).first()
    if user:
        return jsonify({'error': 'This user already exists'}), 409

    # type of user
    is_organization = data.get('is_organization', None)

    if is_organization:
        required_keys = ['organization_name', 'email', 'password']

        for key in required_keys:
            value = data.get(key, None)
            if value is None:
                return jsonify({'error': 'Some fields are marked as required'}), 400

        try:
            new_organization_user = User(
                organization_name=data['organization_name'],
                email=data['email'],
                password=data['password'],
                role=Role.ORGANIZATION
            )

            db.session.add(new_organization_user)
            db.session.commit()
            print(new_organization_user)
            return jsonify({'message': 'User created'}), 201

        except Exception as error:
            db.session.rollback()
            print(error.args)
            return jsonify({'message': 'Can not create user'}), 500

    else:
        required_keys = ['name', 'last_name', 'email', 'password']
        for key in required_keys:
            value = data.get(key, None)
            if value is None:
                return jsonify({'error': 'Some fields are marked as required'}), 400

        try:
            new_volunteer = User(
                name=data['name'],
                last_name=data['last_name'],
                email=data['email'],
                password=data['password'],
                role=Role.VOLUNTEER
            )

            db.session.add(new_volunteer)
            db.session.commit()
            print(new_volunteer)
            return jsonify({'message': 'User created'}), 201

        except Exception as error:
            db.session.rollback()
            print(error.args)
            return jsonify({'message': 'Can not create user'}), 500


# endpoint to login
@app.route('/login', methods=['POST'])
def login():

    # verify data content
    if request.json is None or not request.json:
        return jsonify({'error': 'No Json data provided'}), 400

    email = request.json.get('email', None)
    password = request.json.get('password', None)

    user = User.query.filter_by(email=email, password=password).first()

    if user is None:
        return jsonify({'error': 'something went wrong, please try again'}), 401

    token = create_access_token(identity={'id': user.id, 'role': user.role})
    return jsonify({'message': 'logged in succesfully',
                    'token': token
                    }), 200


# endpoint to post-add events
@app.route('/add-event', methods=['POST'])
@jwt_required()
def add_event():
    current_user = get_jwt_identity()
    print(current_user)
    data = request.json

    # verify data content
    if data is None or not data:
        return jsonify({'error': 'No Json data provided'}), 400

    # verify if event exists
    event = Event.query.filter_by(name=data['name']).one_or_none()
    print(event)
    if event:
        return jsonify({'error': 'This event already exists'}), 409

    required_keys = ['name', 'description', 'location',
                      'event_time', 'event_start_date_time' , 'event_end_date_time' ,'duration']
    for key in required_keys:
        value = data.get(key, None)
        if value is None:
            return jsonify({'error': 'Some fields are marked as required'}), 400

        try:
            new_event = Event(
                name=data['name'],
                description=data['description'],
                location=data['location'],
                event_time=data['event_time'],
                event_start_date_time=data['event_start_date_time'],
                event_end_date_time=data['event_end_date_time'],
                duration=data['duration'],
                creator_id=current_user['id']
            )

            db.session.add(new_event)
            db.session.commit()
            return jsonify({'message': 'Event created'}), 201

        except Exception as error:
            db.session.rollback()
            print(error.args)
            return jsonify({'message': 'Can not create event'}), 500


# Endpoint for listing org-user events
@app.route('/all-events', methods=['GET'])
@jwt_required()
def get_all_events():
    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user['id']).one_or_none()

    if user is None:
        return jsonify({'message': 'user not found'}), 404

    events_list = [event.serialize() for event in user.created_events]
    return jsonify({'message': events_list}), 200


# Endpoint for listing all events
@app.route('/events-list', methods=['GET'])
def get_events_list():
    events = Event.query.all()  # empty array if no events created
    events_list = [event.serialize() for event in events]
    return jsonify({'result': events_list})


# Endpoint to delete event
@app.route("/delete-event/<int:event_id>", methods=['DELETE'])
@jwt_required()
def delete_event(event_id):
    current_user = get_jwt_identity()
    print(current_user)
    event = Event.query.filter_by(id=event_id).first()

    if event is not None:
        try:
            db.session.delete(event)
            db.session.commit()
            return jsonify({"ok": True, "message": "Event deleted"}), 204

        except Exception as error:
            print(error)
            db.session.rollback()
            return jsonify({"message": "Server error"}), 500

    return jsonify({"message": "Not found"}), 404


# Endpoints to send an email
@app.route('/reset-psw-request', methods=['POST'])
def reset_psw_request():

    email = request.json.get('email', None)
    if email is not None:
        user = User.query.filter_by(email=email).first()
        if user:
            reset_token = create_access_token(identity=user.id)
            user.reset_token = reset_token
            try:
                db.session.commit()
                reset_url = f"https://zany-broccoli-qjprvq6j9j9f6x7w-3000.app.github.dev/update-psw?token={reset_token}"
                message = Message(subject="Test de email",
                                  sender='alopez70828@gmail.com',
                                  recipients=['alopez70828@gmail.com']
                                  )

                message.body = reset_url
                mail.send(message)
                return jsonify({"message": "Send succesfully"}), 200
            except Exception as error:
                db.session.rollback()
                return jsonify({"message": f"Server error {error}"}), 500
    return jsonify({"message": f"user not found"}), 404
            
@app.route('/reset-psw/<token>', methods=['POST'])
@jwt_required()
def reset_psw(token):
    current_user_id= get_jwt_identity()
    user= User.query.get(current_user_id)
    if user.reset_token == token:
        new_password= request.json.get("password")
        user.password= new_password
        user.reset_token=None
        try:
            db.session.commit()
            return jsonify({"message": f"Password reset succesfully"}), 200
        except Exception as error:
            db.session.rollback()
            return jsonify({"message": f"Server error {error}"}), 500
    return jsonify({"message": f"Invalid or expired token"}), 401




    # this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
