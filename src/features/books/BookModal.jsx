import React from 'react';
import { X } from 'lucide-react';

export default function BookModal({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close Summary Window">
          <X />
        </button>
        <div className="modal-body">
          <div className="modal-image">
            <img src={book.coverUrl} alt={book.title} />
          </div>
          <div className="modal-details">
            <h2>{book.title}</h2>
            <p className="modal-author">By {book.author}</p>
            <hr />
            <div className="summary-info">
              <h4>Book Details & Summary</h4>
              <p><strong>First Published:</strong> {book.year}</p>
              <p><strong>Publisher:</strong> {book.publisher}</p>
              {book.isbn && <p><strong>ISBN:</strong> {book.isbn}</p>}
            </div>
            {book.subjects.length > 0 && (
              <div className="modal-tags">
                <h4>Subjects:</h4>
                <div className="tags-container">
                  {book.subjects.map((subject, idx) => (
                    <span key={idx} className="tag">{subject}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}