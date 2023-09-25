const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const outfitSchema = new Schema({
	category: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
});

const Outfit = mongoose.model("Outfit", outfitSchema);
module.exports = { Outfit };
