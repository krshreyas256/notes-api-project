import './App.css'
import Header from './components/Header'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
	const [notes, setNotes] = useState([])

	function addNote(note) {
		setNotes([...notes, note])
	}

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