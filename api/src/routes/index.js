const { Router } = require("express");
const router = Router();
const charactersRouter = require("./charactersRouter");
const outfitsRouter = require("./outfitsRouter");
const usersRouter = require("./usersRouter");
const authenticateRouter = require("./authenticateRouter");

router.use("/characters", charactersRouter);
router.use("/outfits", outfitsRouter);
router.use("/users", usersRouter);
router.use("/login", authenticateRouter);

module.exports = router;
