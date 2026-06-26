from flask import request
from app import app
from config import db
from models import Book


# =========================
# GET ALL BOOKS
# =========================
@app.route("/books", methods=["GET"])
def get_books():
    return [b.to_dict() for b in Book.query.all()]


# =========================
# GET ONE BOOK
# =========================
@app.route("/books/<int:id>", methods=["GET"])
def get_book(id):
    return Book.query.get_or_404(id).to_dict()


# =========================
# CREATE BOOK
# =========================
@app.route("/books", methods=["POST"])
def create_book():
    data = request.get_json()

    book = Book(
        title=data["title"],
        author=data["author"],
        genre=data.get("genre"),
        description=data.get("description")
    )

    db.session.add(book)
    db.session.commit()

    return book.to_dict(), 201


# =========================
# UPDATE BOOK
# =========================
@app.route("/books/<int:id>", methods=["PATCH"])
def update_book(id):
    book = Book.query.get_or_404(id)
    data = request.get_json()

    book.title = data.get("title", book.title)
    book.author = data.get("author", book.author)
    book.genre = data.get("genre", book.genre)
    book.description = data.get("description", book.description)

    db.session.commit()
    return book.to_dict()


# =========================
# DELETE BOOK
# =========================
@app.route("/books/<int:id>", methods=["DELETE"])
def delete_book(id):
    book = Book.query.get_or_404(id)

    db.session.delete(book)
    db.session.commit()

    return {}, 204