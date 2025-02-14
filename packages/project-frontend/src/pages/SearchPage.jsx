import React from 'react'
import GameCard from '../components/GameCard'
import SoccerBall from '../assets/soccer-ball.png'
import SearchBar from '../components/SearchBar'
import LeftSidebar from '../components/LeftSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function SearchPage({openLeftSidebar}) {
	const navigate = useNavigate()
	return (
		<>
			<div className="flex relative flex-1 bg-background dark:bg-dark-background">
				<LeftSidebar openLeftSidebar={openLeftSidebar}/>
				<div className="flex flex-1 flex-col px-5 justify-center">
					<div className="mt-5">
						<SearchBar />
					</div>
					{/* Game List */}
					<ul className="flex flex-col w-full gap-10 mb-10 items-center mt-5">
						{Array(5)
							.fill(0)
							.map((_, i) => (
								<GameCard
									key={i}
									img={SoccerBall}
									name={'Pickup Soccer'}
									skillTag={'Recreational'}
									locationTag={'San Luis Obispo'}
									playersTag={'8'}
									description={'Cool description'}
								/>
							))}
					</ul>
				</div>
				{/* Add Game */}
				<button onClick={() => navigate('/add-game')} className="fixed cursor-pointer transition-all duration-300 lg:bottom-10 lg:right-10 bottom-5 right-5 bg-button-background hover:bg-button-hover focus:bg-button-focus dark:bg-dark-button-background dark:hover:bg-dark-button-hover dark:focus:bg-dark-button-focus text-button-text font-bold rounded-full py-4 px-4 rounded">
					<FontAwesomeIcon icon={faPlus} className="w-6"/>
				</button>
			</div>
		</>
	)
}
