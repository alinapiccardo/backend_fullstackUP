const { Character, Player } = require("../db");

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
	const updatedCharacter = req.body;
	const { user } = req.body;
	console.log(updatedCharacter);

	try {
		const charId = updatedCharacter._id;

		const newOutfit = await Character.findByIdAndUpdate(
			charId,
			{ $push: { outfit: updatedCharacter.outfit } },
			{ new: true }
		);

		const player = await Player.findByIdAndUpdate(
			user._id,
			{
				$push: {
					myCharacters: {
						_id: updatedCharacter._id,
						name: updatedCharacter.name,
						face: updatedCharacter.face,
						outfit: updatedCharacter.outfit,
					},
				},
			},
			{ new: true }
		);

		console.log(`Added ${newOutfit.name} to ${player.username}'s saved Chars`);
		res.status(201).json(newOutfit);
	} catch (err) {
		res.status(400).send(err);
	}
};

module.exports = { getCharactersHandler, addOutfitToCharacter };
