const { Player } = require("../db");

const getUsersHandler = async (req, res) => {
	try {
		const { username } = req.params;
		let users;

		if (username) {
			users = await Player.findOne({ username });
		} else {
			users = await Player.find();
		}

		if (!users) {
			res.status(404).json({ error: "User not found" });
			return;
		}

		return res.status(200).json(users);
	} catch (error) {
		return res.status(500).json({ error: error.message });
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
