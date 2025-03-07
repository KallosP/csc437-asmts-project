import React, {useState} from "react";
import {GameType} from "../components/GameCard";
import GameCard from "../components/GameCard";

interface GameListProps {
    input: string,
    games: GameType[] 
}

// Credit: https://dev.to/salehmubashar/search-bar-in-react-js-545l
function GameList({input, games}: GameListProps) {
    // Filter original array and create a new one
	const filteredData = games.filter((el) => {
        // Return original if no input
		if (input === "") {
			return el;
		}

		// Return item that includes input
		else {
			return el.location.toLowerCase().includes(input);
		}
	});

	return (
		<ul className="flex flex-col w-full gap-10 mb-10 items-center mt-5">
			{filteredData.map((game) => (
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
			))}
		</ul>
	);
}

export default GameList;
