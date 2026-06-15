# 📚 OpenLibrary Hub

OpenLibrary Hub is a fast, responsive Single Page Application (SPA) designed for book discovery, tracking, and personal catalog management. Built as a software engineering capstone project, the application connects directly to the Open Library REST API, allowing users to search millions of titles, curate custom bookshelves, maintain a favorites vault, and log persistent, multi-comment reading journals.

![App Screenshot](https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80)

---

## 🚀 Key Features

* **Real-Time Global Search:** Asynchronously fetch records from the Open Library API. Features an integrated **600ms input debounce mechanism** to minimize network thrashing and optimize search performance.
* **Personal Tracker Bookshelf:** Save books to a personal tracking space and update their reading status dynamically (`In Progress` vs. `Read`).
* **Curated Favorites Vault:** Instantly toggle book markers into a filtered favorites interface with immediate state updating across views.
* **Ranked Reviews Dashboard:** Books with assigned star ratings are automatically aggregated and displayed on a dedicated board, sorted in descending order from highest to lowest score.
* **Multi-Comment Note Logs:** Append multiple notes, memorable quotes, or reflections to any rated book. Every note is stamped with a human-readable local timestamp and a unique cryptographic ID.
* **Asynchronous Micro-Interactions:** Replaced disruptive native browser alerts with custom, non-blocking **SweetAlert2 toast notifications** for all user actions.
* **Persistent Storage:** Full state data layer is safely written to and synchronized with the browser's `localStorage` engine.

---

## 🛠️ Tech Stack & Tooling

* **Frontend Library:** React 19 (Functional Components & Hooks)
* **Build Architecture:** [Vite](https://vite.dev/) (Rapid Hot Module Replacement dev server)
* **Styling Engine:** [Tailwind CSS v4](https://tailwindcss.com/) (Utilizing the specialized compiler `@tailwindcss/vite` plugin for zero-runtime CSS parsing)
* **Iconography:** [Lucide React](https://lucide.dev/) (Vector icons asset maps)
* **Alert Modals:** [SweetAlert2](https://sweetalert2.github.io/) (Asynchronous modal UI)

---

## 📁 Project Architecture

```text
my-library-app/
├── public/
├── src/
│   ├── assets/
│   │   └── icon1.png           # Custom application branding identity asset
│   ├── components/
│   │   ├── Navbar.jsx          # Multi-tab view routing navigator
│   │   └── Footer.jsx          # Clean application context footer
│   ├── features/
│   │   └── books/
│   │       ├── BookCard.jsx    # Monolithic reusable UI card matrix component
│   │       ├── BookGrid.jsx    # Structural catalog renderer
│   │       ├── BookModal.jsx   # Detailed lightbox information view overlay
│   │       ├── Bookshelf.jsx   # Target reading status workflow dashboard
│   │       ├── Favorites.jsx   # Curated user likes collection page
│   │       ├── Reviews.jsx     # High-to-low ranked note logging matrix
│   │       └── bookService.js  # Async network layer connecting Open Library API
│   ├── App.jsx                 # Single-source-of-truth state hub & main controller
│   ├── index.css               # Base Tailwind compilation injection layer
│   └── main.jsx                # Application DOM mounting mount entry point
├── vite.config.js              # Custom Tailwind v4 bundle pipeline settings
├── package.json                # Project dependencies and operational scripts
└── README.md                   # System configuration & overview file
