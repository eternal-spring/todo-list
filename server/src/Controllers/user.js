const { UserService } = require("../Services");
const { User } = require("../Models");

const userService = new UserService(User);

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const config = require("../Config");

const handleSignup = async (req, res) => {
  try {
    const { username, password } = req.body;
    hashedPassword = bcrypt.hashSync(password, 10);
    await userService
      .create({ username, password: hashedPassword })
      .then(() => res.send({ message: "User was registered successfully!" }));
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const handleLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userService.findUser(username);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    var passwordIsValid = await bcrypt.compare(
      password,
      user.dataValues.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password",
      });
    }

    var token = jwt.sign(
      {
        UserInfo: {
          id: user.id,
          username: user.username,
        },
      },
      config.ACCESS_TOKEN_SECRET,
      {
        expiresIn: 86400,
      }
    );

    res.status(200).send({ id: user.id, name: user.username, accessToken: token });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = { handleLogin, handleSignup };
