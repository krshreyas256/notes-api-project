from fastapi import FastAPI
from sqlalchemy.orm import Session

import models
import schemas
from database import Base, SessionLocal, engine

app = FastAPI()

Base.metadata.create_all(bind=engine)


@app.get("/")
def home():
    return {"message": "Welcome to Notes API!"}


@app.post("/notes")
def create_note(note: schemas.NoteCreate):
    db: Session = SessionLocal()

    new_note = models.Note(
        title=note.title,
        content=note.content
    )

    db.add(new_note)
    db.commit()
    db.refresh(new_note)
    db.close()

    return new_note