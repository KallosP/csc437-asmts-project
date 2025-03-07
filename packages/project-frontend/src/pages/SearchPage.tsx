import React, {useEffect} from "react";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";
import LeftSidebar from "../components/LeftSidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useNavigate, useLocation} from "react-router-dom";
import GenericSport from "../assets/generic-sport.jpg";
import LoadingSpinner from "../components/LoadingSpinner";
import BACKEND_URL from "../constants";
import {GameType} from "../components/GameCard";
import {useToken} from "../TokenContext";

// TODO: working search bar and filtering (keep it simple)

interface SearchPageProps {
	openLeftSidebar: boolean;
	addAuthHeader: (token: string, otherHeaders?: Record<string, string>) => Record<string, string>;
}

export default function SearchPage({openLeftSidebar, addAuthHeader}: SearchPageProps) {
	const navigate = useNavigate();
	const location = useLocation();
	const {token, currUserId} = useToken();

	const gameData = location.state?.gameData;

	console.log("Location:", location.state);
	console.log("Token:", token);
	console.log("User:", currUserId);

	// TODO: fetch from backend (for this user)
	const [games, setGames] = React.useState<GameType[]>([]);
	const [loading, setLoading] = React.useState(true); // Loading state

	useEffect(() => {
		try {
			fetch(`${BACKEND_URL}/api/games`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					...addAuthHeader(token)
				}
			}).then((response) => {
				if (response.ok) {
					response.json().then((data) => {
						// Transform the data into GameType before setting state
						const transformedGames = data.map((game: any) => ({
							...game,
							players: game.players.map((player: any) => player.username), // Extract usernames
							organizer: game.organizer.username // Extract the username of the organizer
						}));
						setGames(transformedGames);
						setLoading(false);
					});
				} else {
					throw new Error("Failed to fetch games");
				}
			});
		} catch (e) {
			console.log("Error fetching games:", e);
			alert("Failed to fetch games");
		}
	}, [addAuthHeader, token]);

	return (
		<>
			<div className="flex relative flex-1 bg-background dark:bg-dark-background">
				<LeftSidebar openLeftSidebar={openLeftSidebar} />
				<div className="flex flex-1 flex-col px-5 justify-start">
					<div className="mt-5">
						<SearchBar />
					</div>
					{/* Game List */}
					{loading ? (
						<LoadingSpinner />
					) : games.length > 0 ? (
						<ul className="flex flex-col w-full gap-10 mb-10 items-center mt-5">
							{games.map(
								(game) => (
									console.log("TEsT", game),
									(
										<GameCard
											key={game._id}
											_id={game._id}
											img={game.img}
											title={game.title}
											level={game.level}
											location={game.location}
											players={game.players}
											description={game.description}
											sport={game.sport}
											organizer={game.organizer}
										/>
									)
								)
							)}
						</ul>
					) : (
						<p>No games found</p>
					)}
				</div>
				{/* Add Game */}
				<button
					onClick={() => navigate("/add-game", {state: {token, currUserId}})}
					className="fixed cursor-pointer transition-all duration-300 lg:bottom-10 lg:right-10 bottom-5 right-5 bg-button-background hover:bg-button-hover focus:bg-button-focus dark:bg-dark-button-background dark:hover:bg-dark-button-hover dark:focus:bg-dark-button-focus text-button-text font-bold rounded-full py-4 px-4 rounded">
					<FontAwesomeIcon icon={faPlus} className="w-6" />
				</button>
			</div>
		</>
	);
}
