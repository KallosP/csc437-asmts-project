import React from 'react'

export default function GameCard(props) {

	const handleClick = () => {
		console.log('Game clicked')
	}

	return (
		<button
			onClick={handleClick}
			className="w-full mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl xl:max-w-5xl lg:p-5 overflow-hidden rounded-3xl bg-white shadow-md  text-left cursor-pointer transition-all duration-300 hover:bg-blue-100 ">
			<div className="lg:flex gap-8">
				<div className="md:shrink-0">
					<img
						className="w-full lg:rounded-3xl object-cover "
						src={props.img}
						alt="Soccer ball on field"
					/>
				</div>
				<div className="lg:p-0 p-8 overflow-hidden">
					<div className="text-4xl tracking-wide">{props.name}</div>
					{/* Tags */}
					<div className="mt-2 overflow-hidden">
						<ul className="flex gap-2 truncate">
                            {/* Skill Tag */}
							<li className="bg-blue-300 rounded-full px-2 py-1 flex gap-2">
								<img src={props.skillTag[0]} className="w-6 h-6"></img>
								<p>{props.skillTag[1]}</p>
							</li>
                            {/* Location Tag */}
							<li className="bg-blue-300 rounded-full px-2 py-1 flex gap-2">
								<img src={props.locationTag[0]} className="w-6 h-6"></img>
								<p>{props.locationTag[1]}</p>
							</li>
                            {/* Players Tag */}
							<li className="bg-blue-300 rounded-full px-2 py-1 flex gap-2">
								<img src={props.playersTag[0]} className="w-6 h-6"></img>
								<p>{props.playersTag[1]}</p>
							</li>
						</ul>
					</div>
					{/* Game Description */}
					<p className="mt-4 truncate">
                        {props.description}
					</p>
				</div>
			</div>
		</button>
	)
}
