const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: Number,
		required: true,
	},
	myCharacters: {
		type: Array,
		required: false,
	},
	isActive: {
		type: Boolean,
		required: true,
	},
});

const Player = mongoose.model("Player", playerSchema);
module.exports = { Player };
