const { Router } = require("express");
const outfitsRouter = Router();
const {
	getOutfitsHandler,
	getOutfitsByIdHandler,
} = require("../handlers/outfitsHandler");

outfitsRouter.get("/", getOutfitsHandler);
outfitsRouter.get("/:id", getOutfitsByIdHandler);

module.exports = outfitsRouter;
