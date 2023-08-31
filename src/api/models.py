from flask_sqlalchemy import SQLAlchemy
import enum
db = SQLAlchemy()

class Role(enum.Enum):
    VOLUNTEER="Volunteer"
    ORGANIZATION="Organization"

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    organization_name= db.Column(db.String(100), nullable=True)
    name= db.Column(db.String(20), nullable=True)
    last_name= db.Column(db.String(20), nullable=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)

    role= db.Column(db.Enum(Role), default= Role.VOLUNTEER)

    # foreign keys
    events= db.Column(db.Integer, db.ForeignKey("event.id"))
    attended= db.Column(db.Integer, db.ForeignKey("attendance.id"))

    # relationships
    created_evenAts= db.relationship("Event", back_populates="creator")
    attended_events= db.relationship("Attendance", back_populates="user")
    
    def __repr__(self):
        return f'User(email={self.email}, name={self.name})'

    def serialize(self):
        return {
            "id": self.id,
            "organization_name": self.organization.name,
            "email": self.email,
            "role": self.role
        }
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "email": self.email,
            "role": self.role
        }
    

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255))
    location = db.Column(db.String(150), nullable=False)
    date = db.Column( nullable=False)
    duration = db.Column(db.String(150), nullable=False)
    cost = db.Column(db.Integer)

    # foreign key
    creator_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    assistance = db.Column(db.Integer, db.ForeignKey("attendance.id"))
    # relationships
    creator = db.relationship("User", back_populates= "created_events")
    attendance = db.relationship("Attendance", back_populates= "event")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "location": self.location,
            "date": self.date,
            "duration": self.duration,
            "cost": self.cost,
            "creator_id": self.creator_id
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
