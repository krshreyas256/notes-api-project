import { useState } from 'react'

function NoteForm() {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	return (
		<form>
			<label>Title:</label>
			<input 
				type="text"
				value={title}
				onChange={(event) => {
					setTitle(event.target.value)
				}} 
			/>

			<label>Content:</label>
			<textarea
				value={content}
				onChange={(event) => {
					setContent(event.target.value)
				}}>
			</textarea>

			<button>Add Note</button>
		</form>
  	)
}

export default NoteForm