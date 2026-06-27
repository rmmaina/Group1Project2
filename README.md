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
- Axios / Fetch API

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

Step 7: Run migrations
- flask db init
- flask db migrate
- flask db upgrade

Step 8: Seed database
- python seed.py

Step 9: Run backend server
- python app.py

Backend runs at:
- http://localhost:5000

Frontend Setup Steps
--------------------

Step 1: Create React app
- npm create vite@latest frontend

Step 2: Move into frontend folder
- cd frontend

Step 3: Install dependencies
- npm install

Step 4: Install Axios
- npm install axios

Step 5: Start frontend server
- npm run dev

Frontend runs at:
- http://localhost:5173

Frontend Integration Steps
-------------------------

Step 1: Create API service file
- src/services/api.js

Step 2: Add backend URL
- http://localhost:5000

Step 3: Create components
- BookList
- BookForm
- ReviewList

Step 4: Connect frontend to backend using Axios

How to Update Backend
----------------------

If changes are made:

Step 1: Stop server (CTRL + C)

Step 2: Run migrations
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
It is intended for academic learning and submission.
No commercial use is permitted.