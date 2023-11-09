const crypto = require("crypto");
const { Player } = require("../db");

const authenticator = async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return res.status(401).json({ error: "Missing credentials" });
	}
	try {
		const player = await Player.findOne({ username, password });
		if (player) {
			const token = crypto.randomBytes(32).toString("hex");
			req.session.token = token;
			res.status(200).json(player);
			console.log("player", player);
		} else {
			res.status(401).json({ error: "Credenciales incorrectas" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error en el servidor" });
	}
};

module.exports = { authenticator };
