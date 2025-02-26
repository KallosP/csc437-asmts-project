import './App.css'
import SearchPage from './pages/SearchPage'
import TopBar from './components/TopBar'
import LoginPage from './pages/LoginPage'
import AddGamePage from './pages/AddGamePage'
import GamePage from './pages/GamePage'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
	const [openLeftSidebar, setOpenLeftSidebar] = useState(false)
	const [darkMode, setDarkMode] = useState(false)

	function handleMenuClick() {
		setOpenLeftSidebar(!openLeftSidebar)
		console.log('CLICKED', openLeftSidebar)
	}

	function toggleDarkMode() {
		setDarkMode(!darkMode)
		localStorage.setItem('darkMode', JSON.stringify(!darkMode))
	}

	return (
		<Router>
			<div
				className={`flex ${
					localStorage.getItem('darkMode') === 'true' ? 'dark' : ''
				} flex-col h-screen bg-background dark:bg-dark-background duration-300 transition-all overflow-y-scroll`}>
				<TopBar
					handleMenuClick={() => handleMenuClick()}
					darkMode={darkMode}
					toggleDarkMode={() => toggleDarkMode()}
				/>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/search" element={<SearchPage openLeftSidebar={openLeftSidebar} />} />
					<Route path="/view-game" element={<GamePage />} />
					<Route path="/add-game" element={<AddGamePage />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
