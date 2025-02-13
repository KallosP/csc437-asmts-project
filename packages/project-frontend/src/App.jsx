import './App.css'
import SearchPage from './pages/SearchPage'
import TopBar from './components/TopBar'

function App() {
	return (
		<div className="flex dark flex-col h-screen">
			<TopBar />
			<SearchPage />
		</div>
	)
}

export default App
