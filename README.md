# Parkour Tricks Tracker

A full-stack CRUD application that allows users to track, organize, and manage their parkour tricks. Users can create an account, log in, and maintain a personalized list of tricks, updating their progress over time.

---

## Description

**Parkour Tricks Tracker** is built for traceurs who want a structured way to log their training progress. Each user has their own account and can add, view, edit, and delete parkour tricks. Tricks include categorized fields such as difficulty, takeoff type, and consistency(stomped), along with optional notes.

---

## Features

- User authentication (Sign Up / Sign In / Sign Out)
- Full CRUD functionality for parkour tricks tracking
- User-specific data (users only see their own tricks)
- Server-side rendering with EJS
- Responsive layout for mobile and desktop

---

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- EJS
- CSS
- bcrypt
- express-session
- method-override

---

## App Structure

├── controllers/
├── models/
├── routes/
├── views/
│   ├── auth/
│   ├── tricks/
│   └── partials/
├── public/
│   └── stylesheets/
└── server.js

---

## Data Model

Each **Trick** includes:

- `name` (String)
- `category` (Enum)
- `difficulty` (Enum)
- `takeoff` (Enum)
- `stomped` (Enum)
- `notes` (Optional String)
- `tutorialUrl` (Optional String)
- Associated `user`

---

## Authentication & Authorization

- Passwords are hashed using bcrypt
- Sessions manage login state
- Protected routes prevent unauthorized access
- Users can only view and modify their own tricks

---

## Responsive Design

- Layout adjusts for mobile and desktop screens
- Media queries ensure usability on smaller devices
- Consistent UI across all pages

---

## Future Improvements

- Add search and filtering
- Track progress history
- Allow video uploads for form-study
- Add completion dates or milestones

---

## Author

Alex Paulus

---