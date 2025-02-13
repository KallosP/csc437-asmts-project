import React from 'react'
import GameCard from '../components/GameCard'
import SoccerBall from '../assets/soccer-ball.png'
import SearchBar from '../components/SearchBar'
import LeftSidebar from '../components/LeftSidebar'

export default function SearchPage() {
	return (
		<>
			<div className="flex flex-1 bg-background dark:bg-dark-background">
				<LeftSidebar />
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
									skillTag={[SoccerBall, 'Recreational']}
									locationTag={[SoccerBall, 'San Luis Obispo']}
									playersTag={[SoccerBall, '8/11']}
									description={'Cool description'}
								/>
							))}
					</ul>
				</div>
			</div>
		</>
	)
}
