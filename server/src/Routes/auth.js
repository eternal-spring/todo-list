const { UserController } = require("../Controllers");
const { verifySignup } = require("../Middleware");
const router = require("express").Router();

router.post("/signup", [verifySignup], UserController.handleSignup);
router.post("/signin", UserController.handleLogin);
module.exports = router;
