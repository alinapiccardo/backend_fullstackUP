const authenticateUser = (req, res, next) => {
	if (req.session.token) {
		next();
	} else {
		res.status(401).json({ error: "No autorizado" });
	}
};

module.exports = { authenticateUser };
