const { Router } = require("express");
const usersRouter = Router();
const { getUsersHandler, createUser } = require("../handlers/usersHandler");
const { validate } = require("../middlewares/validate");

usersRouter.get("/", getUsersHandler);
usersRouter.get("/:id", getUsersHandler);
usersRouter.post("/", validate, createUser);

module.exports = usersRouter;
