const { Player } = require("../db");

const getUsersHandler = async (req, res) => {
	const { id } = req.params;
	try {
		if (id) {
			let user = await Player.findById(id);
			res.status(200).json(user);
		} else {
			let users = await Player.find({});
			res.status(200).json(users);
		}
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
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
