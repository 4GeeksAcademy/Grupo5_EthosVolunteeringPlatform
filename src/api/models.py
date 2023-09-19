from flask_sqlalchemy import SQLAlchemy
import enum
import json
db = SQLAlchemy()

class Role(str, enum.Enum):
    VOLUNTEER="Volunteer"
    ORGANIZATION="Organization"

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    organization_name= db.Column(db.String(100), nullable=True)
    name= db.Column(db.String(20), nullable=True)
    last_name= db.Column(db.String(20), nullable=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    reset_token= db.Column(db.String(300), unique=True)
    credentials = db.Column(db.Text)
    role= db.Column(db.Enum(Role), default= Role.VOLUNTEER)

    # relationships
    created_events= db.relationship("Event", back_populates="creator")
    attended_events= db.relationship("Attendance", back_populates="user")
    
    def __repr__(self):
        return f'User(email={self.email}, name={self.name})'
    
    def serialize(self):
        return {
            "id": self.id,
            "organization_name": self.organization.name,
            "name": self.name,
            "last_name": self.last_name,
            "email": self.email,
            "role": self.role
        }
    
    def set_credentials(self, creds_obj):
        self.credentials = creds_obj

    def get_credentials(self):
        try:
            return json.loads(self.credentials)
        except Exception as error:
            print(error.args)
            return None
    

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255))
    location = db.Column(db.String(150), nullable=False)
    event_end_time = db.Column(db.String(15), nullable=False)
    event_time = db.Column(db.String(25), nullable=False)
    event_start_date_time = db.Column(db.String(15), nullable=False)
    event_end_date_time = db.Column(db.String(15), nullable=False)
    duration = db.Column(db.String(15), nullable=False)
    org_name = db.Column(db.String(25), nullable=False)
    category = db.Column(db.String(25), nullable=False)
    event_img = db.Column(db.String(500), nullable=False)

    # foreign key
    creator_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    # assistance = db.Column(db.Integer, db.ForeignKey("attendance.id"))
    # relationships
    creator = db.relationship("User", back_populates= "created_events")
    attendance = db.relationship("Attendance", back_populates= "event")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "location": self.location,
            "event_end_time": self.event_end_time,
            "event_time": self.event_time,
            "event_start_date_time" : self.event_start_date_time,
            "event_end_date_time" : self.event_end_date_time,
            "duration": self.duration,
            "org_name": self.org_name,
            "category": self.category,
            "event_img": self.event_img,
            "creator_id": self.creator_id,
            "attendance" : len(self.attendance)
        }


class Attendance(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    # foreign keys
    user_id= db.Column(db.Integer, db.ForeignKey("user.id"))
    event_id= db.Column(db.Integer, db.ForeignKey("event.id"))
    
    # relationships
    user= db.relationship("User", back_populates= "attended_events")
    event= db.relationship("Event", back_populates= "attendance")

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "event_id": self.event_id
        }

