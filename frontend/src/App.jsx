import './App.css'
import Header from './components/Header'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import axios from "axios"

function App() {
	const [notes, setNotes] = useState([])

	async function addNote(note) {
		await axios.post("http://127.0.0.1:8000/notes", note)
		await fetchNotes()
	}

	async function fetchNotes() {
		const response = await axios.get("http://127.0.0.1:8000/notes")
		setNotes(response.data)
	}

	useEffect(() => {
		fetchNotes()
	}, [])

	return (
		<div>
			<Header
				title="Notes Application"
				subtitle="Welcome to my first React app"
			/>
			
			<NoteForm 
				onAddNote={addNote}	
			/>
			<NoteList 
				notes={notes}
			/>

			<Footer />
		</div>
  )
}

export default App