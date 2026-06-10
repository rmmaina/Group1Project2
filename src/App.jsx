import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BookGrid from "./features/books/BookGrid.jsx";
import BookModal from "./features/books/BookModal.jsx";
import { fetchBooks } from "./features/books/bookService.js";
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Phase 1: Handle User Search Debounce (waits 600ms after typing stops before hitting API)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
      setPage(1); // Reset back to page 1 for new search expressions
    }, 600);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Phase 2: Live Fetching Engine synced to search terms and page turns
  useEffect(() => {
    let isMounted = true;
    
    async function loadLibraryData() {
      try {
        setLoading(true);
        setError(null);
        
        // Query the API using either user input or default classic literature query
        const query = debouncedTerm.trim() || 'classic literature';
        const data = await fetchBooks(query, page);
        
        if (isMounted) {
          setBooks(data.books);
          setTotalResults(data.totalResults);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to fetch book indices from the Open Library network API.');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadLibraryData();
    return () => { isMounted = false; };
  }, [debouncedTerm, page]);

  const totalPages = Math.ceil(totalResults / 30);

  return (
    <div className="app-container">
      <Navbar />
      
      <main>
        {/* Interactive Search Engine Subsystem */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              className="search-bar"
              placeholder="Search thousands of books across global archives..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {loading && <div className="status-message">Querying live network registries...</div>}
        
        {error && <div className="status-message error-message">{error}</div>}
        
        {!loading && !error && (
          books.length > 0 ? (
            <>
              <BookGrid books={books} onSelectBook={setSelectedBook} />
              
              {/* Dynamic Pagination Controls */}
              <div className="pagination-container">
                <button 
                  className="pagination-btn"
                  onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                >
                  <ChevronLeft size={18} /> Previous
                </button>
                
                <span className="pagination-info">
                  Page <strong>{page}</strong> of {totalPages || 1}
                </span>

                <button 
                  className="pagination-btn"
                  onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={page >= totalPages}
                >
                  Next <ChevronRight size={18} />
                </button>
              </div>
            </>
          ) : (
            <div className="no-results">
              <h3>No match records uncovered</h3>
              <p>We couldn't find matching titles for "{searchTerm}". Check spelling or alter terms.</p>
            </div>
          )
        )}
      </main>

      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      
      <Footer />
    </div>
  );
}