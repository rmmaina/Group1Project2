📚 Book Review System – Full Stack Web Application
📌 Project Overview

This project is a full-stack web application built using Flask (backend), React (frontend), and PostgreSQL (database).

It allows users to manage books and their reviews using a RESTful API with full CRUD functionality.

🎯 Project Objective

The goal of this project is to design and implement a full-stack system where users can:

Add books to a collection
View all available books
Add reviews and ratings for books
Update and delete books and reviews

This demonstrates understanding of backend API development, database relationships, and frontend integration.

💡 Problem Statement

People often read multiple books but do not have a simple way to track their thoughts and reviews in one place.

This system provides a structured way to store books and user reviews in a database and manage them easily.

🛠️ Technologies Used
Backend
Python
Flask
Flask SQLAlchemy
Flask Migrate
Flask CORS
PostgreSQL
Frontend
React (Vite / Create React App)
Axios / Fetch API
🗂️ Project Structure
server/
│
├── app.py
├── config.py
├── seed.py
│
├── models/
│   ├── __init__.py
│   ├── book.py
│   └── review.py
│
├── routes/
│   ├── book_routes.py
│   └── review_routes.py
🔗 API Endpoints
📘 Books
Method	Endpoint	Description
GET	/books	Get all books
GET	/books/<id>	Get a single book
POST	/books	Create a new book
PATCH	/books/<id>	Update a book
DELETE	/books/<id>	Delete a book
⭐ Reviews
Method	Endpoint	Description
GET	/reviews	Get all reviews
GET	/reviews/<id>	Get a single review
POST	/reviews	Create a review
PATCH	/reviews/<id>	Update a review
DELETE	/reviews/<id>	Delete a review
🧪 Sample API Requests
➕ Create a Book
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "genre": "Programming",
  "description": "A book about writing clean and maintainable code."
}
⭐ Create a Review
{
  "rating": 5,
  "comment": "Very helpful and easy to understand.",
  "book_id": 1
}
🗄️ Database Setup
1. Create Database
CREATE DATABASE library_db;
2. Configure Database Connection

Update config.py:

postgresql://postgres:your_password@localhost/library_db
3. Run Migrations
flask db init
flask db migrate
flask db upgrade
🌱 Seeding the Database

To populate the database with sample data:

python seed.py

This will insert:

Sample books
Sample reviews linked to books
▶️ How to Run the Project
1. Start Backend Server
python app.py

Backend runs at:

http://localhost:5000
2. Start Frontend (React)
npm install
npm run dev
🔥 Key Features
Full CRUD operations for Books
Full CRUD operations for Reviews
One-to-many relationship (Book → Reviews)
RESTful API design
PostgreSQL database integration
React frontend ready for integration
📚 Learning Outcomes

This project demonstrates:

Building REST APIs using Flask
Working with relational databases (PostgreSQL)
Creating and managing database relationships
Structuring a full-stack application
Connecting frontend and backend systems

🚀 Future Improvements
User authentication (login/register system)
Average rating per book
Search and filtering functionality
Improved React UI design
Deployment on cloud platforms

👨‍💻 Developers

1.Robert Maina 2.Joseph Ndemo 3.Mark Warunge 4.Abdirahman Abdi Salah 5.Gregory Kipchumba 6.Rotich Ian