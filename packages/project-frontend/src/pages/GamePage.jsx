import GenericSport from '../assets/generic-sport.jpg'
import { useLocation } from 'react-router-dom'
import Tag from '../components/Tag'
import CommentSection from '../components/CommentSection'
import { useState, useEffect } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'

export default function GamePage() {
	const location = useLocation()
	const [isGoing, setIsGoing] = useState(false)
	const { tags, ...props } = location.state || []
	const [isLoading, setIsLoading] = useState(false)
	const [players, setPlayers] = useState(props.players)

	function handleMarkAsGoing() {
		setIsGoing(prevState => !prevState)
	}

	// FIXME: the use of the players state variable in rendering 
	//		  was for frontend testing purposes. prob have to change
	//		  logic for backend
	useEffect(() => {
		const updatePlayers = async () => {
			if(isLoading) return
			setIsLoading(true)
			await new Promise((resolve) => setTimeout(resolve, 1000))
			// TODO: add backend operations here (fetch, update, etc.)
			if (isGoing) {
				setPlayers([...players, 'Foo bar'])
			} else {
				setPlayers(players.filter(player => player !== 'Foo bar'))
			}
			setIsLoading(false)
		}
		updatePlayers()
	}, [isGoing])

	return (
		<div className="flex self-center justify-center items-center w-full py-4 lg:px-16">
			<div className="flex flex-4 flex-col self-center justify-center items-center w-full p-4">
				{/* Top Section - Game Info */}
				<div className="flex flex-col rounded-lg overflow-hidden w-full h-full bg-elevated-background dark:bg-dark-elevated-background">
					<img src={props.img || GenericSport} className="w-full h-[14em] object-cover" />
					{/* Game Info */}
					<div className="flex flex-col p-4">
						{/* Header */}
						<div className="flex flex-col items-start lg:flex-row justify-between lg:items-center">
							{/* Title */}
							<h1 className="text-4xl mb-2 lg:mb-0 font-semibold text-normal-text dark:text-dark-normal-text">
								{props.name || 'No Title'}
							</h1>
							<div className="flex flex-wrap gap-2">
								{/* Tags */}
								<div className="flex flex-wrap gap-2">
									{tags.map((tag, index) => (
										<Tag
											key={index}
											title={typeof tag.title === 'number' ? players.length : tag.title}
											icon={tag.icon}
										/>
									))}
								</div>
								{/* RSVP Button */}
								<button
									onClick={() => handleMarkAsGoing()}
									className="text-button-text h-10 dark:text-dark-button-text cursor-pointer transition-all duration-300 bg-button-background dark:bg-dark-button-background hover:bg-button-hover dark:hover:bg-dark-button-hover focus:bg-button-focus dark:focus:bg-dark-button-focus font-medium rounded-lg text-sm px-4 py-2 ">
									{isLoading ? <LoadingSpinner /> : isGoing ? 'Going!' : 'Mark As Going'}
								</button>
							</div>
						</div>
						{/* Description/Attendees */}
						<div className="flex flex-col lg:flex-row mt-4 p-4 border border-divider box-shadow shadow-sm dark:border-dark-divider rounded-lg ">
							{/* Description */}
							<div className="flex-4 mb-4 lg:mb-0">
								<h2 className="text-3xl text-normal-text dark:text-dark-normal-text">
									Description
								</h2>
								<hr className="w-full mt-2 border-divider dark:border-dark-divider"></hr>
								<p className="mt-2 text-normal-text text-wrap break-words dark:text-dark-normal-text">
									{props.description || 'No Description'}
								</p>
							</div>
							{/* Players */}
							<div className="flex-1 lg:text-center lg:border-l border-divider dark:border-dark-divider">
								<h2 className="text-3xl text-normal-text dark:text-dark-normal-text">Players</h2>
								<hr className="w-full mt-2 border-divider dark:border-dark-divider"></hr>
								<ul>
									{!players.length ? (
										<li className="mt-2 text-normal-text dark:text-dark-normal-text">No players</li>
									) : (
										players.map((player, index) => (
											<li
												key={index}
												className="mt-2 text-normal-text dark:text-dark-normal-text text-wrap break-words">
												{player}
											</li>
										))
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* Comment Section */}
				<CommentSection />
			</div>
		</div>
	)
}
