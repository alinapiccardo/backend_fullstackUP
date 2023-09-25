const { Router } = require("express");
const charactersRouter = Router();
const { getCharactersHandler } = require("../handlers/charactersHandler");

charactersRouter.get("/", getCharactersHandler);
charactersRouter.get("/:id", getCharactersHandler);

module.exports = charactersRouter;
