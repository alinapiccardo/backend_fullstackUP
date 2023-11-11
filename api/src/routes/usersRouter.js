const { Router } = require("express");
const usersRouter = Router();
const {
	getUsersHandler,
	createUser,
	updateUserHandler,
} = require("../handlers/usersHandler");
const { validate } = require("../middlewares/validate");

usersRouter.get("/", getUsersHandler);
usersRouter.get("/:id", getUsersHandler);
// usersRouter.put("/:id", updateUserHandler);
usersRouter.post("/", validate, createUser);

module.exports = usersRouter;
