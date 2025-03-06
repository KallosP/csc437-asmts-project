import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true
		},
		hashedPassword: {
			type: String,
			required: true,
			trim: true
		}
	},
	{collection: "users"}
);

const Users = mongoose.model("Users", UsersSchema);

export default Users;