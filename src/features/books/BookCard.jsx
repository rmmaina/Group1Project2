import React from 'react';

export default function BookCard({ book, onSelect }) {
  return (
    <div className="book-card" onClick={() => onSelect(book)}>
      <div className="card-image-wrapper">
        <img src={book.coverUrl} alt={book.title} loading="lazy" />
      </div>
      <div className="card-content">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">By {book.author}</p>
        <div className="card-footer">
          <span className="book-year">Published: {book.year}</span>
        </div>
      </div>
    </div>
  );
}