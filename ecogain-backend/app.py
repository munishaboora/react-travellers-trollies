from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy 
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./data/ecogain.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False    # Disables modification notifications
app.config['SECRET_KEY'] = 'string'
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from models import User

@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/user', methods=['POST'])
def create_user():
    data = request.get_json()
    hash_password = generate_password_hash(data['password'], method='sha256')
        # verification
    new_user = User(name = data['name'], username = data['username'], email = data['email'], password_hash = hash_password, total_points = 0 )
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message' : 'new user created'})

@app.route('/user', methods=['GET'])
def get_all_users():
    users = User.query.all()
    output = []
    for user in users:
        user_data = {}
        user_data['id'] = user.id
        user_data['name'] = user.name
        user_data['username'] = user.username
        user_data['email'] = user.email
        user_data['password'] = user.password_hash
        user_data['total_points'] = user.total_points
        output.append(user_data)

    return jsonify({'users': output})

@app.route('/user/<user_id>', methods=['GET'])
def get_one_user(user_id):
    user = User.query.filter_by(id = user_id).first()
    if not user:
        return jsonify({'message': ' no user found'})
    
    user_data = {}
    user_data['id'] = user.id
    user_data['name'] = user.name
    user_data['username'] = user.username
    user_data['email'] = user.email
    user_data['password'] = user.password_hash
    user_data['total_points'] = user.total_points

    # might wanna change these returns to not include 'user'
    return jsonify({ 'user': user_data})

# for if we want a delete profile section on profile page
@app.route('/user/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.filter_by(id=user_id).first()

    if not user:
        return jsonify({'message': ' no user found'})
    
    db.session.delete(user)
    db.session.commit()
    return jsonify ({'message': 'user deleted'})