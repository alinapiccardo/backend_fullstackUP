const { Character } = require("../db");

const getCharactersHandler = async (req, res) => {
	try {
		const { id } = req.params;
		let characters;

		if (id) {
			characters = await Character.findById(id);
		} else {
			characters = await Character.find();
		}

		res.status(200).json(characters);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
const addOutfitToCharacter = async (req, res) => {
	updatedCharacter = req.body;
	try {
		charId = updatedCharacter._id;
		const newOutfit = await Character.findByIdAndUpdate(charId, {
			$push: { outfit: updatedCharacter.outfit },
		});
		res.status(201).json(newOutfit);
	} catch (err) {
		res.status(400).send(err);
	}
};

module.exports = { getCharactersHandler, addOutfitToCharacter };
