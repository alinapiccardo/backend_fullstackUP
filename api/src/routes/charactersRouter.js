const { Router } = require("express");
const charactersRouter = Router();
const {
	getCharactersHandler,
	addOutfitToCharacter,
} = require("../handlers/charactersHandler");

charactersRouter.get("/", getCharactersHandler);
charactersRouter.get("/:id", getCharactersHandler);
charactersRouter.put("/:id", addOutfitToCharacter);

module.exports = charactersRouter;
