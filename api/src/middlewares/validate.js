const { Player } = require("../db");

const validate = async (req, res, next) => {
	const { username, password } = req.body;

	const existingPlayer = await Player.findOne({ username });

	if (existingPlayer) {
		return res
			.status(400)
			.json({ error: "El nombre de usuario ya está en uso" });
	}

	if (!/^\d{5}$/.test(password)) {
		return res
			.status(400)
			.json({ error: "La contraseña debe tener 5 números" });
	}

	next();
};

module.exports = { validate };
