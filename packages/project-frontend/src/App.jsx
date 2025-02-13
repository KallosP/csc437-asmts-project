import './App.css'
import SearchPage from './pages/SearchPage'
import TopBar from './components/TopBar'
import { useState } from 'react'

function App() {
	const [openLeftSidebar, setOpenLeftSidebar] = useState(false)
	function handleMenuClick() {
		setOpenLeftSidebar(!openLeftSidebar)
		console.log(openLeftSidebar)
	}
	return (
		<div className="flex flex-col h-screen">
			<TopBar handleMenuClick={() => handleMenuClick()} />
			<SearchPage openLeftSidebar={openLeftSidebar}/>
		</div>
	)
}

export default App
