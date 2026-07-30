import NoteCard from './Notecard'
function NoteList() {
	return (
		<div>
			<NoteCard
				title="Shopping List"
				content="Buy milk and bread."
			/>

			
			<NoteCard
				title="College"
				content="Finish React assignment."
			/>

			<NoteCard
				title="Vacation"
				content="Book train tickets."
			/>
		</div>
		)
}

export default NoteList