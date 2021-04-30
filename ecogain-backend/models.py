from app import db

class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    username = db.Column(db.String, index = True, unique = True)
    email = db.Column(db.String)
    password_hash = db.Column(db.String(128))
    total_points = db.Column(db.Integer)

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
