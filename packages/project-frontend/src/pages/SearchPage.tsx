import React, {useEffect} from "react";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";
import LeftSidebar from "../components/LeftSidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useNavigate, useLocation} from "react-router-dom";
import GenericSport from "../assets/generic-sport.jpg";
import LoadingSpinner from "../components/LoadingSpinner";

// TODO: working search bar and filtering (keep it simple)

interface SearchPageProps {
	openLeftSidebar: boolean;
}

export default function SearchPage({openLeftSidebar}: SearchPageProps) {
	const navigate = useNavigate();
	const location = useLocation();
	const token = location.state?.token;
	const currUserId = location.state?.currUserId;
	const gameData = location.state?.gameData;

	console.log("Location:", location.state);
	console.log("Token:", token);
	console.log("User:", currUserId);

	// TODO: fetch from backend (for this user)
	const [games, setGames] = React.useState([
		{
			id: 1,
			img: GenericSport,
			title: "Game One",
			sport: "Other",
			level: "Casual",
			location: "Park A",
			description: "Fun outdoor game!",
			players: ["John Doe", "Jane Doe"]
		},
		{
			id: 2,
			img: GenericSport,
			title: "Game Two",
			sport: "Other",
			level: "Recreational",
			location: "Stadium B",
			description: "Competitive team play!",
			players: ["Bill", "Bob", "Charlie", "Dean"]
		}
	]);
	const [loading, setLoading] = React.useState(false); // Loading state

	useEffect(() => {
		// TODO: fetch all games from backend
		if(gameData){
			// Temporary
			setGames([...games, gameData])
		}
	}, [gameData]);

	return (
		<>
			<div className="flex relative flex-1 bg-background dark:bg-dark-background">
				<LeftSidebar openLeftSidebar={openLeftSidebar} />
				<div className="flex flex-1 flex-col px-5 justify-center">
					<div className="mt-5">
						<SearchBar />
					</div>
					{/* Game List */}
					{loading ? (
						<LoadingSpinner />
					) : (
						<ul className="flex flex-col w-full gap-10 mb-10 items-center mt-5">
							{games.map((game, i) => (
								<GameCard
									key={i}
									img={game.img}
									name={game.title}
									sportTag={game.sport}
									skillTag={game.level}
									locationTag={game.location}
									players={game.players}
									playersTag={game.players.length}
									description={game.description}
									sport={game.sport}
								/>
							))}
						</ul>
					)}
				</div>
				{/* Add Game */}
				<button
					onClick={() => navigate("/add-game", { state: {token, currUserId} })}
					className="fixed cursor-pointer transition-all duration-300 lg:bottom-10 lg:right-10 bottom-5 right-5 bg-button-background hover:bg-button-hover focus:bg-button-focus dark:bg-dark-button-background dark:hover:bg-dark-button-hover dark:focus:bg-dark-button-focus text-button-text font-bold rounded-full py-4 px-4 rounded">
					<FontAwesomeIcon icon={faPlus} className="w-6" />
				</button>
			</div>
		</>
	);
}
