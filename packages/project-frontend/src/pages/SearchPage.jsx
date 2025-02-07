import React from 'react'
import TopBar from '../components/TopBar'
import GameCard from '../components/GameCard'
import SoccerBall from '../assets/soccer-ball.png'
import SearchBar from '../components/SearchBar'

export default function SearchPage() {
	return (
		<>
			<TopBar />
			<div className="flex-1 bg-darkGray">
                <div className="mt-5">
				    <SearchBar />
                </div>
				{/* Game List */}
				<ul className="flex flex-col w-full gap-10 items-center mt-5">
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
		</>
	)
}
