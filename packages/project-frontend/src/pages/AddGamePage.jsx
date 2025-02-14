import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddGamePage() {
	const [title, setTitle] = useState('')
	const [location, setLocation] = useState('')
	const [description, setDescription] = useState('')
	const [sport, setSport] = useState('')
	const [level, setLevel] = useState('Casual')

	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		const gameData = { title, location, description, sport, level }
		console.log('Game Added:', gameData)
		// TODO: send gameData to backend
        navigate('/search')
	}

	return (
		<div className="flex flex-col self-center justify-center items-center w-full p-4">

			<form
				onSubmit={handleSubmit}
				className="bg-elevated-background mb-4 dark:bg-dark-elevated-background p-6 rounded-lg shadow-lg w-full max-w-2xl">
				<h1 className="text-3xl font-semibold text-center text-normal-text dark:text-dark-normal-text mb-6">
					Create a Game
				</h1>

				{/* Game Title */}
				<div className="mb-4">
					<label className="block text-normal-text dark:text-dark-normal-text mb-1">
						Game Title
					</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="w-full px-3 dark:text-dark-normal-text text-normal-text placeholder:text-hint-text py-2 border-2 border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-input-border-ring dark:focus:ring-dark-input-border-ring dark:border-dark-input-border "
						placeholder="Enter game title"
						required
					/>
				</div>

				{/* Location */}
				<div className="mb-4">
					<label className="block text-normal-text dark:text-dark-normal-text mb-1">Location</label>
					<input
						type="text"
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						className="w-full dark:text-dark-normal-text text-normal-text px-3 placeholder:text-hint-text py-2 border-2 border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-input-border-ring dark:focus:ring-dark-input-border-ring dark:border-dark-input-border "
						placeholder="Enter location"
						required
					/>
				</div>

				{/* Description */}
				<div className="mb-4">
					<label className="block text-gray-700 dark:text-gray-200 mb-1">Description</label>
					<textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className="w-full dark:text-dark-normal-text text-normal-text resize-none px-3 placeholder:text-hint-text py-2 border-2 border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-input-border-ring dark:focus:ring-dark-input-border-ring dark:border-dark-input-border "
						placeholder="Provide a brief description of the game"
						rows="3"
						required></textarea>
				</div>

				{/* Select Sport */}
				<div className="mb-4">
					<label className="block text-gray-700 dark:text-gray-200 mb-1">Sport</label>
					<select
						value={sport}
						onChange={(e) => setSport(e.target.value)}
						className="w-full bg-gray-200 px-3 placeholder:text-hint-text py-2 border-2 border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-input-border-ring dark:focus:ring-dark-input-border-ring dark:border-dark-input-border "
						required>
						<option value="" disabled>
							Select a sport
						</option>
						<option value="soccer">Soccer</option>
						<option value="basketball">Basketball</option>
						<option value="tennis">Tennis</option>
						<option value="volleyball">Volleyball</option>
					</select>
				</div>

				{/* Select Level */}
				<div className="mb-4">
					<label className="block text-gray-700 dark:text-gray-200 mb-2">Level</label>
					<div className="flex gap-4">
						{['Casual', 'Recreational', 'Competitive'].map((lvl) => (
							<label key={lvl} className="flex items-center gap-2">
								<input
									type="radio"
									value={lvl}
									checked={level === lvl}
									onChange={(e) => setLevel(e.target.value)}
									className="accent-checkbox-checked dark:accent-dark-checkbox-checked"
								/>
								<p className='text-normal-text dark:text-dark-normal-text'>{lvl}</p>
							</label>
						))}
					</div>
				</div>

				{/* Submit Button */}
				<button
					type="submit"
				    className="my-2 w-full text-button-text dark:text-dark-button-text cursor-pointer transition-all duration-300 bg-button-background dark:bg-dark-button-background hover:bg-button-hover dark:hover:bg-dark-button-hover focus:bg-button-focus dark:focus:bg-dark-button-focus font-medium rounded-lg text-sm px-4 py-2 ">
					Create Game
				</button>
			</form>
		</div>
	)
}
