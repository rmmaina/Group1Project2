Open library book System – Full Stack Web Application

Project Overview
----------------
This is a full-stack web application built using Flask, React, and PostgreSQL.
It allows users to manage books and reviews.
It provides full CRUD functionality using a REST API.

Project Objective
-----------------
- Add books to a collection
- View all books
- Add reviews and ratings for books
- Update books and reviews
- Delete books and reviews

Problem Statement
-----------------
People read books but lack a simple way to store reviews.
This system provides a structured way to manage books and reviews.
Data is stored in PostgreSQL and accessed via API.

Technologies Used
-----------------

Backend:
- Python
- Flask
- Flask SQLAlchemy
- Flask Migrate
- Flask CORS
- PostgreSQL

Frontend:
- React (Vite / CRA)
- Axios

Project Structure
-----------------
server/
    app.py
    config.py
    seed.py

models/
    book.py
    review.py

routes/
    book_routes.py
    review_routes.py

Backend Setup Steps
-------------------

Step 1: Create project folder
- mkdir server
- cd server

Step 2: Create virtual environment
- python -m venv venv
- venv\Scripts\activate

Step 3: Install dependencies
- pip install flask flask-sqlalchemy flask-migrate flask-cors psycopg2

Step 4: Create files
- app.py
- config.py
- seed.py

Step 5: Configure database
- Set PostgreSQL URI in config.py

Step 6: Create models

Book:
- id
- title
- author
- genre
- description

Review:
- id
- rating
- comment
- book_id

Relationship:
- One Book → Many Reviews

Step 7: Run database migrations
- flask db init
- flask db migrate
- flask db upgrade

Step 8: Seed database
- python seed.py

Step 9: Run backend server
- python app.py

Backend will run at:
- http://localhost:5000

How to Update Backend (After Changes)
--------------------------------------

If you make changes to models or routes:

Step 1: Stop server (CTRL + C)

Step 2: Run migrations again
- flask db migrate -m "update changes"
- flask db upgrade

Step 3: Restart server
- python app.py

API Endpoints
--------------

Books:
- GET /books
- GET /books/<id>
- POST /books
- PATCH /books/<id>
- DELETE /books/<id>

Reviews:
- GET /reviews
- GET /reviews/<id>
- POST /reviews
- PATCH /reviews/<id>
- DELETE /reviews/<id>

Frontend Setup Steps
--------------------

Step 1:
- npm create vite@latest frontend

Step 2:
- npm install

Step 3:
- npm install axios

Step 4:
- npm run dev

Features
--------
- Full CRUD for books
- Full CRUD for reviews
- One-to-many relationship
- REST API
- PostgreSQL integration
- React frontend integration

Developers
----------
- Robert Maina
- Joseph Ndemo
- Mark Warunge
- Abdirahman Abdi Salah
- Gregory Kipchumba
- Rotich Ian

Copyright
---------
This project is developed for educational purposes only.
It is intended for learning and academic submission use.
No commercial use is permitted.