import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Tag from './Tag'

export default function GameCard(props) {
	const navigate = useNavigate()

	const handleClick = () => {
		console.log('Game clicked')
		navigate('/view-game', { state: {tags, ...props}  })
	}

	const tags = [
		{ title: props.sportTag, icon: null},
		{ title: props.skillTag, icon: null},
		{ title: props.locationTag, icon: faLocationDot},
		{ title: props.playersTag, icon: faUser},
	]

	return (
		<button
			onClick={handleClick}
			className="w-full mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl xl:max-w-5xl lg:p-5 overflow-hidden rounded-3xl dark:bg-dark-elevated-background bg-elevated-background shadow-md text-left cursor-pointer transition-all duration-300 dark:hover:bg-dark-card-hover hover:bg-card-hover ">
			<div className="lg:flex gap-8">
				<div className="md:shrink-0">
					<img
						className="lg:w-sm w-full lg:rounded-3xl object-cover "
						src={props.img}
						alt="sport ball"
					/>
				</div>
				<div className="lg:p-0 p-8 overflow-hidden">
					<div className="text-4xl tracking-wide text-normal-text dark:text-dark-normal-text">
						{props.name}
					</div>
					{/* Tags */}
					<div className="mt-2 overflow-hidden">
						<ul className="flex flex-wrap gap-2 truncate">
							{tags.map((tag, index) => (
								<Tag key={index} title={tag.title} icon={tag.icon} />
							))}
						</ul>
					</div>
					{/* Game Description */}
					<p className="mt-4 truncate text-normal-text dark:text-dark-normal-text">
						{props.description}
					</p>
				</div>
			</div>
		</button>
	)
}
