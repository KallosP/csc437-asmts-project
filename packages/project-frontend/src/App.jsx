import './App.css'
import SearchPage from './pages/SearchPage'
import TopBar from './components/TopBar'
import { useState } from 'react'

function App() {
	const [openLeftSidebar, setOpenLeftSidebar] = useState(false)
	const [darkMode, setDarkMode] = useState(false)

	function handleMenuClick() {
		setOpenLeftSidebar(!openLeftSidebar)
	}

	function toggleDarkMode() {
		setDarkMode(!darkMode)
	}

	return (
		<div className={`flex ${darkMode ? 'dark' : ''} flex-col h-screen`}>
			<TopBar handleMenuClick={() => handleMenuClick()} darkMode={darkMode} toggleDarkMode={() => toggleDarkMode()} />
			<SearchPage openLeftSidebar={openLeftSidebar} />
		</div>
	)
}

export default App
