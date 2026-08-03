# Notes Application

A full-stack Notes Application built with **React** and **FastAPI** that allows users to create, view, update, and delete notes. The application uses a RESTful API for communication between the frontend and backend and stores data in a SQLite database.

---

## Features

- Create new notes
- View all saved notes
- Edit existing notes
- Delete notes
- Real-time updates after every operation
- Clean and responsive user interface

---

## Tech Stack

### Frontend
- React
- Axios
- CSS

### Backend
- FastAPI
- SQLAlchemy
- SQLite
- Uvicorn

---

## Project Structure

```
notes-api-project/
│
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   ├── database.py
│   ├── notes.db
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/krshreyas256/notes-api-project
```

---

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Create a virtual environment (optional but recommended):

```bash
python -m venv venv
```

Activate the virtual environment:

**Windows**

```bash
venv\Scripts\activate
```

**Linux/macOS**

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

The backend will run on:

```
http://127.0.0.1:8000
```

---

### 3. Frontend Setup

Open another terminal.

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/notes` | Retrieve all notes |
| POST | `/notes` | Create a new note |
| PUT | `/notes/{id}` | Update a note |
| DELETE | `/notes/{id}` | Delete a note |

---

## What I Learned

This project helped me learn:

- React Components
- React Hooks (`useState`, `useEffect`)
- Axios for API communication
- FastAPI REST APIs
- SQLAlchemy ORM
- SQLite database integration
- CRUD operations

---

## Future Improvements

- User authentication
- Search notes
- Filter and sort notes
- Dark mode
- Categories/Tags
- Rich text editor
- Deploy frontend and backend

---

## Author

**K R Shreyas**

GitHub: *https://github.com/krshreyas256*

LinkedIn: *https://www.linkedin.com/in/krshreyas*

---