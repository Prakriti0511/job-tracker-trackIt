# Job Application Tracker

A simple full-stack software system to track job applications, built using Flask, React, and a relational database.

This project was designed with a focus on clean architecture, correctness, and maintainability rather than feature complexity.

---

# Overview

The system allows users to:

* Add job applications
* View all job applications
* Update application status
* Delete applications
* Search applications

Each job application contains:

* Company name
* Role
* Status (Applied, Interview, Rejected, Offer)
* Creation timestamp

---

# Architecture

The project follows a clear separation of concerns:

Backend (Flask API)

* app.py → Application entry point and configuration
* models.py → Database models and schema definitions
* routes.py → API route definitions and request handling

Frontend (React)

* App.js → UI, state management, and API integration

Database

* SQLite relational database using SQLAlchemy ORM

Frontend communicates with backend via REST API.

---

# Technical Decisions

Flask

Flask was chosen because it is lightweight and provides full control over system structure and request handling.

SQLAlchemy

SQLAlchemy ORM was used to:

* Prevent direct SQL usage
* Improve safety
* Provide schema-based validation

React

React was used for:

* Component-based UI
* Predictable state management
* Clear frontend-backend separation

Relational Database

A relational database was used because job applications have a clear structured schema.

---

# System Design Principles

This system was designed with the following principles:

Clear structure

Separating models, routes, and application setup improves maintainability.

Simplicity

The system avoids unnecessary abstractions.

Correctness

Database constraints prevent invalid states.

Change resilience

Changes to one layer do not affect unrelated layers.

---

# AI Usage

AI tools were used to assist with:

* Initial project scaffolding
* Boilerplate code generation
* Architectural suggestions

All AI-generated code was reviewed, verified, and modified before use.

An AI guidance file (claude.md) was created to define rules and constraints for AI-assisted development.

---

# Risks and Limitations

This system currently does not include:

* Authentication
* Authorization
* Production deployment configuration

These were intentionally excluded to keep the system simple and focused.

---

# Future Improvements

Possible extensions include:

* User authentication
* Job notes and reminders
* Deployment using Docker
* Automated testing
* Pagination for large datasets

---

# How to Run

Backend

cd backend

activate virtual environment

python app.py

Frontend

cd frontend

npm install

npm start

---

# Author

Prakriti Sharma
