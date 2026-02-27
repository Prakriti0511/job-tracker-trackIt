# TrackIt — Job Application Tracker

TrackIt is a small full-stack software system designed to help users track their job applications.
It was built with a focus on **clean architecture, correctness, and maintainability**, rather than feature complexity.

This project was developed as part of an engineering assessment.

---

# Live System Overview

TrackIt allows users to:

* Add a job application
* View all applications
* Update application status
* Delete applications
* Search and filter applications

Each job application includes:

* Company name
* Role
* Status (Applied, Interview, Rejected, Offer)
* Created timestamp

---

# Tech Stack

Frontend
React (JavaScript)

Backend
Flask (Python)

Database
SQLite (Relational database using SQLAlchemy ORM)

---

# Architecture

The backend follows a modular architecture with clear separation of concerns:

backend/

* app.py → Application entry point and configuration
* models.py → Database schema and model definitions
* routes.py → API route definitions and request handling

frontend/

* src/App.js → Main UI, state management, and API integration

---

# API Design

REST API endpoints:

GET /jobs
Fetch all job applications

POST /jobs
Create new job application

PUT /jobs/<id>
Update job status

DELETE /jobs/<id>
Delete job application

---

# Key Engineering Decisions

Relational Database

A relational database was chosen because job applications follow a structured schema and require consistency.

SQLAlchemy ORM

Used to:

* Prevent raw SQL errors
* Enforce schema constraints
* Improve maintainability

Modular Backend Structure

Separating models and routes improves:

* Maintainability
* Readability
* Change resilience

React Frontend

React was chosen for:

* Predictable state management
* Component-based structure
* Clear frontend/backend separation

---

# System Design Principles

This system was built with the following priorities:

Structure
Clear separation between application, routes, and database layers.

Simplicity
Avoid unnecessary abstractions.

Correctness
Database schema prevents invalid states.

Maintainability
Changes to one layer do not affect others.

---

# AI Usage

AI tools were used to assist with:

* Initial project scaffolding
* Boilerplate code generation
* Architecture suggestions

To ensure safe and consistent AI-assisted development, an AI guidance file (`claude.md`) was created defining:

* Coding standards
* Architectural constraints
* Safety rules

All AI-generated code was reviewed, tested, and verified.

---

# Risks and Limitations

This system currently does not include:

* User authentication
* Multi-user support
* Production deployment configuration

These were intentionally excluded to keep the system focused and simple.

---

# Future Improvements

Possible extensions:

* User authentication
* Notes for each job application
* Deployment using Docker
* Automated testing
* Pagination and filtering improvements

---

# How to Run Locally

Backend

cd backend

Create virtual environment

python -m venv venv

Activate environment

Windows:
venv\Scripts\activate

Install dependencies

pip install flask flask_sqlalchemy flask_cors

Run server

python app.py

Backend runs on:
http://127.0.0.1:5000

---

Frontend

cd frontend

Install dependencies

npm install

Run frontend

npm start

Frontend runs on:
http://localhost:3000

---

# Repository Structure

job-tracker-trackIt/

backend/
frontend/
README.md
claude.md

---

# Author

Prakriti Sharma

---

# Assessment Notes

This project prioritizes:

* Clear architecture
* Correctness
* Maintainability
* Responsible AI usage

over feature complexity.
