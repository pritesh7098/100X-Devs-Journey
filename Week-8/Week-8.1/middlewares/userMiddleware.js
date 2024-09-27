// user middleware

const { jwt } = require("jsonwebtoken");
const { USER_JWT_KEY } = require("../config");

const userMiddleware = (req, res, next) => {
  const token = req.headers.token;
  const decoded = jwt.verify(token, USER_JWT_KEY);

  if (!decoded) {
    return res.status(403).json({ message: "Unauthorized User" });
  } else {
    req.userId = decoded.id;
    next();
  }
};

module.exports = {
  userMiddleware: userMiddleware,
};
