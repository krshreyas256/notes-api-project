from fastapi import FastAPI, HTTPException
from sqlalchemy.orm import Session
from typing import List

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


@app.get("/notes", response_model=List[schemas.NoteResponse])
def get_notes():
    db: Session = SessionLocal()

    notes = db.query(models.Note).all()

    db.close()  

    return notes


@app.get("/notes/{note_id}", response_model=schemas.NoteResponse)
def get_note(note_id: int):
    db: Session = SessionLocal()

    note = db.query(models.Note).filter(models.Note.id == note_id).first()


    if note is None:
        raise HTTPException(
            status_code=404,
            detail="Note not found"
        )


    db.close()
    
    return note


@app.put("/notes/{note_id}", response_model=schemas.NoteResponse)
def put_note(note_id: int, note_data: schemas.NoteCreate):
	db: Session = SessionLocal()
	
	note = db.query(models.Note).filter(models.Note.id == note_id).first()

	if note is None:
		raise HTTPException(
			status_code = 404,
			detail = "Note not found"
		)
	
	note.title = note_data.title
	note.content = note_data.content
	
	db.commit()
	db.refresh(note)
	db.close()

	return note