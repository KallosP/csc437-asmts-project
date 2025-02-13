import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function GameCard(props) {
	const handleClick = () => {
		console.log('Game clicked')
	}

	return (
		<button
			onClick={handleClick}
			className="w-full mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl xl:max-w-5xl lg:p-5 overflow-hidden rounded-3xl dark:bg-dark-elevated-background bg-elevated-background shadow-md text-left cursor-pointer transition-all duration-300 dark:hover:bg-dark-card-hover hover:bg-card-hover ">
			<div className="lg:flex gap-8">
				<div className="md:shrink-0">
					<img
						className="w-full lg:rounded-3xl object-cover "
						src={props.img}
						alt="Soccer ball on field"
					/>
				</div>
				<div className="lg:p-0 p-8 overflow-hidden">
					<div className="text-4xl tracking-wide text-normal-text dark:text-dark-normal-text">
						{props.name}
					</div>
					{/* Tags */}
					<div className="mt-2 overflow-hidden">
						<ul className="flex gap-2 truncate">
							{/* Skill Tag */}
							<li className="bg-tag dark:bg-dark-tag rounded-full items-center px-4 py-1 flex gap-2">
								<p className="text-normal-text dark:text-dark-normal-text">{props.skillTag[1]}</p>
							</li>
							{/* Location Tag */}
							<li className="bg-tag dark:bg-dark-tag rounded-full items-center px-4 py-1 flex gap-2">
								<FontAwesomeIcon icon={faLocationDot} className="text-svg dark:text-dark-svg" />
								<p className='text-normal-text dark:text-dark-normal-text'>{props.locationTag[1]}</p>
							</li>
							{/* Players Tag */}
							<li className="bg-tag dark:bg-dark-tag rounded-full items-center px-4 py-1 flex gap-2">
								<FontAwesomeIcon icon={faUser} className="text-svg dark:text-dark-svg" />
								<p className='text-normal-text dark:text-dark-normal-text'>{props.playersTag[1]}</p>
							</li>
						</ul>
					</div>
					{/* Game Description */}
					<p className="mt-4 truncate text-normal-text dark:text-dark-normal-text">{props.description}</p>
				</div>
			</div>
		</button>
	)
}
