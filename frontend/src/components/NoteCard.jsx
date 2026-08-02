function NoteCard({note, onEdit}){
	return(
		<div>
			<h2>{note.title}</h2>
			<p>{note.content}</p>
			<br/>
			<button onClick={() => onEdit(note)}>
				Edit
			</button>
		</div>
		)
}

export default NoteCard