const { Router } = require("express");
const router = Router();
const charactersRouter = require("./charactersRouter");
const outfitsRouter = require("./outfitsRouter");

// Configurar los routers
router.use("/characters", charactersRouter);
router.use("/outfits", outfitsRouter);

module.exports = router;
