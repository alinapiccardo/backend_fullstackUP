const { Player } = require("../db");

const getUsersHandler = async (req, res) => {
	try {
		const { id } = req.params;
		let users;

		if (id) {
			users = await Player.findById(id);
		} else {
			users = await Player.find();
		}

		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const createUser = async (req, res) => {
	try {
		const { body } = req;
		const newUser = new Player(body);
		const user = await newUser.save();

		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = { getUsersHandler, createUser };
