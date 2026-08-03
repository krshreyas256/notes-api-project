import './App.css'
import Header from './components/Header'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import axios from "axios"

function App() {
	const [notes, setNotes] = useState([])
	const [editingNote, setEditingNote] = useState(null)

	async function addNote(note) {
		await axios.post("http://127.0.0.1:8000/notes", note)
		await fetchNotes()
	}

	async function fetchNotes() {
		const response = await axios.get("http://127.0.0.1:8000/notes")
		setNotes(response.data)
	}

	async function updateNote(id, note) {
		await axios.put(`http://127.0.0.1:8000/notes/${id}`, note)
		await fetchNotes()
	}

	async function handleDelete(id) {
		await axios.delete(`http://127.0.0.1:8000/notes/${id}`)
		await fetchNotes()
	}

	function handleEdit(note) {
		setEditingNote(note)
	}

	function clearEditingNote() {
		setEditingNote(null)
	}

	useEffect(() => {
		fetchNotes()
	}, [])

	return (
		<div className="container">
			<Header
				title="Notes Application"
				subtitle="Welcome to my first React app"
			/>
			
			<NoteForm 
				onAddNote={addNote}
				onUpdateNote={updateNote}
				editingNote={editingNote}
				onFinishEdit={clearEditingNote}
			/>
			<NoteList 
				notes={notes}
				onEdit={handleEdit}
				onDelete={handleDelete}
			/>

			<Footer />
		</div>
  )
}

export default App