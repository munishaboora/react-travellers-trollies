from app import db

from werkzeug.security import generate_password_hash, check_password_hash
#from flask_login import UserMixin

class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    username = db.Column(db.String, index = True, unique = True)
    email = db.Column(db.String)
    password_hash = db.Column(db.String(128))
    total_points = db.Column(db.Integer)
'''
    def __repr__(self):
       return '<User {}>'.format(self.username) 

    def set_password(self, password):
       self.password_hash = generate_password_hash(password)

    def check_password(self, password):
       return check_password_hash(self.password_hash, password)

    @login.user_loader
    def load_user(id):
        return User.query.get(int(id))
'''
class Activity(db.Model):
    __tablename__ = 'Activity'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    description = db.Column(db.String)
    activity_points = db.Column(db.Integer)

class Leaderboard(db.Model):
    __tablename__ = 'Leaderboard'
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String)
