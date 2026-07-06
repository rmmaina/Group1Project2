# Open Library Book System – Full Stack Web Application

---

## Project Overview

This is a full-stack web application built using Flask, React, and PostgreSQL.

It allows users to manage books and reviews and provides full CRUD functionality through a REST API.

---

## Project Objective

The system was designed to:

- Add books to a collection
- View all books
- Add reviews and ratings for books
- Update books and reviews
- Delete books and reviews

---

## Problem Statement

People read books but lack a simple way to store and manage reviews.

This system provides a structured way to manage books and reviews, with data stored in PostgreSQL and accessed via a REST API.

---

## Live Demo

https://openlibrary20.vercel.app/

---

## GitHub Repository

https://github.com/rmmaina/Group1Project2

---

## Technologies Used

### Backend
- Python
- Flask
- Flask SQLAlchemy
- Flask Migrate
- Flask CORS
- PostgreSQL

### Frontend
- React (Vite)
- Axios / Fetch API

---

## Project Structure

```text id="structure1"
server/
├── app.py
├── config.py
├── seed.py
│
├── models/
│   ├── book.py
│   └── review.py
│
└── routes/
    ├── book_routes.py
    └── review_routes.py

## Features

- Full CRUD for books
- Full CRUD for reviews
- One-to-many relationship between books and reviews
- REST API architecture
- PostgreSQL database integration
- React frontend integration

---

## API Endpoints

### Books

- GET /books
- GET /books/<id>
- POST /books
- PATCH /books/<id>
- DELETE /books/<id>

### Reviews

- GET /reviews
- GET /reviews/<id>
- POST /reviews
- PATCH /reviews/<id>
- DELETE /reviews/<id>

---

## Backend Setup

### 1. Create project folder

```bash
mkdir server
cd server

2. Create virtual environment
python -m venv venv
venv\Scripts\activate

3. Install dependencies
pip install flask flask-sqlalchemy flask-migrate flask-cors psycopg2

4. Configure database
Set PostgreSQL URI in config.py

5. Run migrations
flask db init
flask db migrate
flask db upgrade

6. Seed database
python seed.py

7. Run backend server
python app.py
Backend runs at:

http://localhost:5000

Frontend Setup
1. Create React app
npm create vite@latest frontend

2. Install dependencies
cd frontend
npm install
npm install axios

3. Run frontend server
npm run dev

Frontend runs at:

http://localhost:5173

Frontend Integration
API service file: src/services/api.js
Backend URL: http://localhost:5000
Components:
BookList
BookForm
ReviewList
Axios used for API communication

How to Update Backend
1. Stop server
CTRL + C

2. Run migrations
flask db migrate -m "update changes"
flask db upgrade

3. Restart server
python app.py

Developers
1.Robert Maina
2.Joseph Ndemo
3.Mark Warunge
4.Abdirahman Abdi Salah
5.Gregory Kipchumba
6.Rotich Ian

License
This project is developed for educational purposes only.
It is intended for academic learning and submission.
No commercial use is permitted.