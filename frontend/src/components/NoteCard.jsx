function NoteCard({note, onEdit, onDelete}){
	return(
		<div>
			<h2>{note.title}</h2>
			<p>{note.content}</p>
			<br/>
			<button onClick={() => onEdit(note)}>
				Edit
			</button>

			<button onClick={() => onDelete(note.id)}>
				Delete
			</button>
		</div>
		)
}

export default NoteCard