# Open Library Book System – Project Pitch & Plan

---

## 1. Problem the Application Solves

The Open Library Book System solves the problem of poor organization and lack of structure in tracking books and personal reading experiences.

Many readers struggle with:
- Keeping track of books they have read or want to read
- Writing and storing reviews in one place
- Remembering ratings or opinions over time
- Managing book information in a structured and searchable way

This project focuses on improving **organization, tracking, and information management** in the context of reading.

---

## 2. Target Users & Their Challenges

### Target Users:
- Students
- Avid readers
- Book club members
- Researchers and learners

### Daily frustrations they face:
- Losing track of books they’ve read
- No centralized place to store reviews
- Difficulty organizing reading lists
- Forgetting book ratings or personal notes
- Using scattered tools (notes apps, paper, or memory)

---

## 3. Value of the Solution

This system adds value by:

- Centralizing book and review management in one application
- Streamlining CRUD operations for books and reviews
- Reducing friction in storing and retrieving reading information
- Improving organization and accessibility of data
- Saving time by avoiding manual tracking methods

---

## 4. External API / Service Usage

The application uses a RESTful API built with Flask to handle communication between the frontend and backend.

If extended, the system could integrate external APIs such as:
- Open Library API for fetching book metadata automatically
- Google Books API for enhanced search and book information

This would improve usability by reducing manual data entry.

---

## 5. Project Goals & User Stories

### Primary Goals:
- Allow users to manage books efficiently
- Enable users to create, update, and delete reviews
- Provide a structured system for storing reading data

### User Stories:
- As a user, I want to add a book so I can track what I read
- As a user, I want to view all books so I can browse my collection
- As a user, I want to add a review so I can record my thoughts
- As a user, I want to update a book so I can fix mistakes or add details
- As a user, I want to delete a book so I can remove irrelevant entries

---

## 6. Technical Strategy & Project Plan

### Step-by-Step Development Process

1. **Planning & Research**
   - Define requirements
   - Design database structure
   - Identify API endpoints

2. **Backend Setup & Modeling**
   - Create Flask application
   - Design models (Book, Review)
   - Setup PostgreSQL database
   - Implement CRUD API routes

3. **Frontend Development**
   - Build React components
   - Create UI for books and reviews
   - Connect frontend to backend using Axios/fetch

4. **Integration**
   - Connect frontend with REST API
   - Test data flow between client and server

5. **Testing & Debugging**
   - Test CRUD operations
   - Fix API errors and UI bugs
   - Validate database relationships

6. **Documentation & Presentation**
   - Finalize README
   - Prepare project pitch
   - Deploy frontend application

---

## 7. Conceptual Design

### Features Overview
- Book management system
- Review system linked to books
- REST API backend
- PostgreSQL relational database
- React frontend UI

### Data Models

**Book**
- id
- title
- author
- genre
- description

**Review**
- id
- rating
- comment
- book_id (foreign key)

### Relationship
- One Book → Many Reviews

---

## 8. React Component Breakdown

- App (main container)
- BookList (displays books)
- BookForm (add/update books)
- ReviewList (shows reviews)
- ReviewForm (submit reviews)
- API Service Layer (handles backend calls)

---

## 9. Tools & Technologies

### Backend:
- Python
- Flask
- Flask SQLAlchemy
- Flask Migrate
- Flask CORS
- PostgreSQL

### Frontend:
- React (Vite)
- JavaScript
- Axios / Fetch API

### Development Tools:
- Git & GitHub
- VS Code
- Postman (API testing)

---

## 10. Alignment with Project Rubric

This project satisfies key rubric requirements:

- ✔ Full CRUD functionality (Books & Reviews)
- ✔ At least 2 related data models (One-to-Many relationship)
- ✔ Clean REST API architecture
- ✔ Responsive React frontend
- ✔ External API readiness (optional extension)
- ✔ Clear documentation and project structure

---

## 11. Timeline & Scope

### Phase 1: Planning
- Requirements gathering
- Database design

### Phase 2: Backend Development
- Flask API setup
- Database modeling
- CRUD implementation

### Phase 3: Frontend Development
- React UI components
- API integration

### Phase 4: Testing
- Debugging backend routes
- UI testing

### Phase 5: Documentation & Submission
- README finalization
- Pitch preparation
- Deployment

---

## 12. Timeline Considerations

- Work is divided into manageable phases
- Time allocated for debugging and iteration
- Research included for APIs and tools if needed
- Buffer time included for testing and improvements

---

## 13. Conclusion

The Open Library Book System is a structured full-stack application designed to simplify how users manage books and reviews.

It demonstrates key software engineering principles including:
- Full-stack development
- REST API design
- Database relationships
- Component-based frontend architecture

The system is scalable and can be extended with external APIs and additional features in future iterations.