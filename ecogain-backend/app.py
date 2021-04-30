from flask import Flask
from flask_sqlalchemcy import SQLAlchemy 
from flask_migrate import Migrate

app = Flask(__name__)

db = SQLALCHEMY(app)
migrate = Migrate(app, db)

@app.route('/')
def hello_world():
    return 'Hello, World!'
