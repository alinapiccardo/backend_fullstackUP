const { Router } = require("express");
const authenticateRouter = Router();
const { authenticateUser } = require("../handlers/authenticateHandler");
const { authenticator } = require("../middlewares/authenticator");

authenticateRouter.post("/", authenticator, authenticateUser);

module.exports = authenticateRouter;
