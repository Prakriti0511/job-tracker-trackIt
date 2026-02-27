from flask import Flask
from flask_cors import CORS
from models import db
from routes import register_routes

app = Flask(__name__)
CORS(app)

# CHANGE THIS WITH YOUR POSTGRESS URL
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///jobs.db'

db.init_app(app)

register_routes(app)


if __name__ == "__main__":

    with app.app_context():
        db.create_all()

    app.run(debug=True)