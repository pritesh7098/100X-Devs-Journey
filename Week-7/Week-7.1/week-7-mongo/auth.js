// authentication logic for application where it authenticates a user is valid or not with verifuing jwt and matching users.

const jwt = require("jsonwebtoken");
const JWT_SECRET = "pritesh7098";

function auth(req, res, next) {
  const token = req.headers.authorization;

  const response = jwt.verify(token, JWT_SECRET);
  if (response) {
    req.userId = token.userId;
    next();
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
}

module.exports = {
  auth,
  JWT_SECRET,
};
