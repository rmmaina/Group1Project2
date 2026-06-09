# BookHub - Online Book Ordering Platform

## Project Overview

BookHub is a web application that enables users to browse and search for books, add books to a shopping cart, and submit orders for shipping.

This project is being developed as part of a Software Engineering Bootcamp and follows an Agile team-based development approach using GitHub for collaboration and version control.

---

## Phase 1 Features

### Homepage

The homepage serves as the landing page for users and provides:

* Application introduction
* Featured books section
* Navigation menu
* Search bar
* Call-to-action buttons

### Book Search

Users can search for books using:

* Book title
* Author name
* Genre (future enhancement)

### Product Catalogue

Displays available books as product cards showing:

* Book cover image
* Title
* Author
* Price
* Availability status
* View details button

### Shopping Cart

Users can:

* Add books to cart
* View selected items
* Update quantities
* Remove items from cart

### Submit Order

Users can:

* Review cart contents
* Enter shipping information
* Submit an order
* Receive order confirmation

---

## Tech Stack

### Frontend

* React
* JavaScript

### Backend

* Python
* Flask

### Database

* PostgreSQL

### Version Control

* Git
* GitHub

### Deployment

* To be determined in later phases

---

## Team Collaboration Workflow

### Branching Strategy

Main branches:

* main → Production-ready code
* develop → Integration branch

Feature branches:

* feature/homepage
* feature/search
* feature/product-cards
* feature/cart
* feature/submit-order

### Development Process

1. Pull latest changes from develop.
2. Create a feature branch.
3. Implement the assigned feature.
4. Commit changes.
5. Push branch to GitHub.
6. Create a Pull Request.
7. Team review.
8. Merge into develop.
9. Merge develop into main after successful testing.

---

## User Stories

### As a user

* I want to view available books.
* I want to search for books.
* I want to add books to my cart.
* I want to remove books from my cart.
* I want to submit an order for shipping.

### As an administrator (Future Scope)

* I want to manage book inventory.
* I want to view customer orders.
* I want to update book listings.

---

## Project Structure

```text
bookhub/

├── backend/
│   ├── app.py
│   ├── models.py
│   ├── routes/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── assets/
│   │
│   └── package.json
│
├── docs/
│
├── README.md
│
└── .gitignore
```

---

## Future Enhancements

* User Authentication
* Wishlist Functionality
* Order Tracking
* Online Payments
* Book Reviews and Ratings
* Admin Dashboard

---

## Contributors

Software Engineering Bootcamp Team

---

## License

This project is for educational purposes only.
