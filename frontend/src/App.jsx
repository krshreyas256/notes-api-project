import './App.css'
import Header from './components/Header'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import Footer from './components/Footer'

function App() {
	return (
		<div>
			<Header
				title="Notes Application"
				subtitle="Welcome to my first React app"
			/>

			<NoteForm />
			<NoteList />
			<Footer />
		</div>
  )
}

export default App