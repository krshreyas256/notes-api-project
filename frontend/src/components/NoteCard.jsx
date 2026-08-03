import "./NoteCard.css";

function NoteCard({note, onEdit, onDelete}){
	return(
		<div className="note-card">
			<h2>{note.title}</h2>
			<p>{note.content}</p>

			<div className="button-group">
				<button className="edit-btn" onClick={() => onEdit(note)}>
					Edit
				</button>

				<button className="delete-btn" onClick={() => onDelete(note.id)}>
					Delete
				</button>
			</div>

		</div>
		)
}

export default NoteCard