const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	face: {
		type: String,
		required: true,
	},
	outfit: {
		type: mongoose.Schema.Types.Mixed,
		ref: "Outfit",
		required: false,
	},
});

const Character = mongoose.model("Character", characterSchema);
module.exports = { Character };
