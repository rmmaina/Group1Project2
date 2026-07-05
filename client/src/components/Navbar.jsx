import React from "react";

export default function Navbar({ currentView, onViewChange }) {
  return (
    <nav className="navbar">
      <button
        className={currentView === "home" ? "active" : ""}
        onClick={() => onViewChange("home")}
      >
        Home
      </button>

      <button
        className={currentView === "bookshelf" ? "active" : ""}
        onClick={() => onViewChange("bookshelf")}
      >
        Bookshelf
      </button>

      <button
        className={currentView === "favorites" ? "active" : ""}
        onClick={() => onViewChange("favorites")}
      >
        Favorites
      </button>

      <button
        className={currentView === "bookClub" ? "active" : ""}
        onClick={() => onViewChange("bookClub")}
      >
        Book Club
      </button>

      {/* ✅ THIS IS THE IMPORTANT FIX */}
      <button
        className={currentView === "manageBooks" ? "active" : ""}
        onClick={() => onViewChange("manageBooks")}
      >
        Manage Books
      </button>
    </nav>
  );
}