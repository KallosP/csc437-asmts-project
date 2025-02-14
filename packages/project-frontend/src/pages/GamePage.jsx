import GenericSport from '../assets/generic-sport.jpg'
import { useLocation } from 'react-router-dom'
import Tag from '../components/Tag'
import CommentSection from '../components/CommentSection'

export default function GamePage() {
	const location = useLocation()
	const {tags, ...props} = location.state || []
	console.log("TEST",props)
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
							<h1 className="text-4xl mb-2 lg:mb-0 font-semibold text-normal-text dark:text-dark-normal-text">{props.name || 'No Title'}</h1>
							<div className="flex flex-wrap gap-2">
								{tags.map((tag, index) => (
									<Tag key={index} title={tag.title} icon={tag.icon} />
								))}
							</div>
						</div>
						{/* Description/Attendees */}
						<div className="flex flex-col lg:flex-row mt-4 p-4 border border-divider box-shadow shadow-sm dark:border-dark-divider rounded-lg ">
							{/* Description */}
							<div className="flex-4 mb-4 lg:mb-0">
								<h2 className="text-3xl text-normal-text dark:text-dark-normal-text">Description</h2>
								<hr className="w-full mt-2 border-divider dark:border-dark-divider"></hr>
								<p className="mt-2 text-normal-text text-wrap break-words dark:text-dark-normal-text">
									{props.description || 'No Description'}
								</p>
							</div>
							{/* Attendees */}
							<div className="flex-1 lg:text-center lg:border-l border-divider dark:border-dark-divider">
								<h2 className="text-3xl text-normal-text dark:text-dark-normal-text">Players</h2>
								<hr className="w-full mt-2 border-divider dark:border-dark-divider"></hr>
								<ul>
									{!props.players.length ? (
										<li className="mt-2 text-normal-text dark:text-dark-normal-text">No players</li>
									) : (
										props.players.map((player, index) => (
											<li key={index} className="mt-2 text-normal-text dark:text-dark-normal-text text-wrap break-words">{player}</li>
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
