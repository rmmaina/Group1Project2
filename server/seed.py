from app import app
from config import db
from models.book import Book
from models.review import Review

print("🔥 Seed script starting...")

with app.app_context():

    print("📦 Inside app context")

    # Clear existing data (IMPORTANT: child first)
    db.session.query(Review).delete()
    db.session.query(Book).delete()

    # Create books
    book1 = Book(
        title="Clean Code",
        author="Robert C. Martin",
        genre="Programming",
        description="A guide to writing clean software."
    )

    book2 = Book(
        title="Atomic Habits",
        author="James Clear",
        genre="Self Improvement",
        description="How habits shape your life."
    )

    db.session.add_all([book1, book2])
    db.session.commit()

    # Create reviews AFTER books exist
    review1 = Review(
        rating=5,
        comment="Excellent book for developers!",
        book_id=book1.id
    )

    review2 = Review(
        rating=4,
        comment="Very practical and useful",
        book_id=book2.id
    )

    db.session.add_all([review1, review2])
    db.session.commit()

    print("✅ Seeding completed successfully!")