import gamesModel from "./models/games";
import { UsersType } from "./models/users";
import { /*GamesType*/ } from "./models/games";
import { ObjectId } from "mongoose";

export class GameProvider {
	async addGame(
		title: string,
		sport: string,
		level: string,
		location: string,
		description: string,
		players: UsersType[],
		img: string,
        organizer: UsersType 
	) {
		const gameToAdd = new gamesModel({title, sport, level, location, description, players, img, organizer});
		const promise = gameToAdd.save();
		return promise;
	}

    // Get all games tied to a user
    async findAllGames(username: string) {
        return gamesModel.find({"organizer.username": username}); 
    }

    // Get a game by id
	async findGame(gameId: string) {
		return gamesModel.findById(gameId);
	}

    // Update a game
	async updateGame(gameId: string, updatedGame: any/*GamesType*/) {
		return gamesModel.findOneAndUpdate({_id: gameId}, updatedGame, {new: true});
	}
}
