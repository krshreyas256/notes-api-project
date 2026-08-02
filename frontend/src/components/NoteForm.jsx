import { useState, useEffect } from 'react'

function NoteForm({ onAddNote, onUpdateNote, editingNote, onFinishEdit }) {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	async function handleSubmit(event) {
		event.preventDefault()
		if(editingNote) {
			await onUpdateNote(editingNote.id, { title, content })
			onFinishEdit()
		}
		else {
			await onAddNote({ title, content })
		}
		setTitle("")
		setContent("")
	}

	useEffect(() => {
    	if (editingNote) {
        	setTitle(editingNote.title)
        	setContent(editingNote.content)
    	} 
		else {
        	setTitle("")
        	setContent("")
    	}
	}, [editingNote])

	return (
		<form onSubmit={handleSubmit}>
			<label>Title:</label>
			<input 
				type="text"
				value={title}
				onChange={(event) => {
					setTitle(event.target.value)
				}} 
			/>

			<br/>

			<label>Content:</label>
			<textarea
				value={content}
				onChange={(event) => {
					setContent(event.target.value)
				}}>
			</textarea>

			<br/>

			<button type="submit">
				{editingNote ? "Update Note" : "Add Note"}
			</button>
		</form>
  	)
}

export default NoteForm