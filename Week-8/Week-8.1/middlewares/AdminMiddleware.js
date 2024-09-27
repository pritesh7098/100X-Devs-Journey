// user middleware

const { jwt } = require("jsonwebtoken");
const { ADMIN_JWT_KEY } = require("../config");

const AdminMiddleware = (req, res, next) => {
  const token = req.headers.token;
  const decoded = jwt.verify(token, ADMIN_JWT_KEY);

  if (!decoded) {
    return res.status(403).json({ message: "Unauthorized Admin" });
  } else {
    req.userId = decoded.id;
    next();
  }
};

module.exports = {
  AdminMiddleware: AdminMiddleware,
};
