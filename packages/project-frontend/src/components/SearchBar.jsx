

// Based on https://flowbite.com/docs/forms/search-input/
export default function SearchBar() {
    const handleSearch = () => {
        console.log('Search clicked')
    }
	return (
		<form className="w-full px-3 py-1 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-5xl overflow-hidden rounded-3xl bg-white shadow-md ">
			<label
				htmlFor="default-search"
				className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
				Search
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg
						className="w-4 h-4 text-black"
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
					className="block w-full p-4 ps-10 text-sm text-gray-900 border-none  rounded-lg bg-white focus:outline-none focus:border-none"
					placeholder="Search Pickup Games..."
				/>
				<button
                    onClick={handleSearch}
					type="submit"
					className="text-white cursor-pointer transition-all duration-300 absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 ">
					Search
				</button>
			</div>
		</form>
	)
}
