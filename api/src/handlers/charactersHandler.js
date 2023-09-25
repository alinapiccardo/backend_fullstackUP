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

module.exports = { getCharactersHandler };
