from flask import Flask
from flask_cors import CORS
from config import db, migrate

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:Kingkaka85@localhost/library_db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
migrate.init_app(app, db)

CORS(app)

# import models (IMPORTANT for SQLAlchemy)
from models import Book, Review

# import routes (NO app inside routes)
from routes.book_routes import *
from routes.review_routes import *

if __name__ == "__main__":
    app.run(debug=True)