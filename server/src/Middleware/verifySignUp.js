const { UserService } = require("../Services");
const { User } = require("../Models");

const userService = new UserService(User);

const verifySignup = async function (req, res, next) {
  const { username } = req.body;
  const user = await userService.findUser(username);
  if (user) {
    res.status(400).send({
      message: "Username is already in use",
    });
    return;
  }
  next();
};

module.exports = verifySignup;
