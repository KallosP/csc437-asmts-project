// Based on https://flowbite.com/docs/forms/search-input/
export default function SearchBar() {
	const handleSearch = () => {
		console.log('Search clicked')
	}
	return (
		<form className="dark:bg-dark-elevated-background bg-elevated-background w-full px-3 py-1 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl xl:max-w-5xl overflow-hidden rounded-3xl  shadow-md ">
			<label
				htmlFor="default-search"
				className="mb-2 text-sm font-medium dark:text-dark-hint-text text-hint-text sr-only">
				Search
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg
						className="w-4 h-4 text-icon dark:text-dark-icon"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>
				<input
					type="search"
					id="default-search"
					className="block w-full p-4 ps-10 text-sm dark:text-dark-hint-text text-hint-text border-none rounded-lg dark:bg-dark-elevated-background bg-elevated-background focus:outline-none focus:border-none"
					placeholder="Search Pickup Game Locations..."
				/>
				<button
					onClick={handleSearch}
					type="submit"
					className="text-button-text dark:text-dark-button-text cursor-pointer transition-all duration-300 absolute end-2.5 bottom-2.5 bg-button-background dark:bg-dark-button-background hover:bg-button-hover dark:hover:bg-dark-button-hover focus:bg-button-focus dark:focus:bg-dark-button-focus font-medium rounded-lg text-sm px-4 py-2 ">
					Search
				</button>
			</div>
		</form>
	)
}
