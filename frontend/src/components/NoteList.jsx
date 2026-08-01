import NoteCard from './Notecard'

function NoteList({ notes }) {
	return (
		<div>
			{
				notes.map((note, index) => (
					<NoteCard
						key={index}
						title={note.title}
				    	content={note.content}
					/>
				))
			}
		</div>
		)
}

export default NoteList