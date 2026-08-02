import NoteCard from './NoteCard'

function NoteList({ notes, onEdit }) {
	return (
		<div>
			{
				notes.map((note) => (
					<NoteCard
						key={note.id}
						note={note}
						onEdit={onEdit}
					/>
				))
			}
		</div>
		)
}

export default NoteList