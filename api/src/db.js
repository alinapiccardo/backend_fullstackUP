require("dotenv").config();
const mongoose = require("mongoose");
const { MONGO_URI } = process.env;
const { Character } = require("../src/models/characterModel");
const { Outfit } = require("../src/models/outfitModel");
const { Player } = require("../src/models/playerModel");

const uri = `mongodb+srv://${MONGO_URI}`;

const db = mongoose
	.connect(uri, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("Conectado a la base de datos de Mongo");
	})
	.catch((err) => {
		console.error("Error al conectar a la base de datos de Mongo", err);
	});

module.exports = {
	Character,
	Outfit,
	Player,
	db,
};
