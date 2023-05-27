const jwt = require("jsonwebtoken");
const config = require("../Config");

const verifyToken = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied.");
  console.log(token);
  jwt.verify(token, config.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({
        message: "Invalid token",
      });
    }
    req.id = decoded.UserInfo.id;
    req.username = decoded.UserInfo.username;
    next();
  });
};

module.exports = verifyToken;
