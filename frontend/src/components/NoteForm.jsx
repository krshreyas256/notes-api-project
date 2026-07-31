import { useState } from 'react'

function NoteForm(props) {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	function handleSubmit(event) {
		event.preventDefault()
		props.onAddNote({ title, content })
		setTitle("")
		setContent("")
	}

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

			<label>Content:</label>
			<textarea
				value={content}
				onChange={(event) => {
					setContent(event.target.value)
				}}>
			</textarea>

			<button type="submit">Add Note</button>
		</form>
  	)
}

export default NoteForm