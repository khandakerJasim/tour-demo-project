const jwt = require("jsonwebtoken");

const Generatetoken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

module.exports = Generatetoken;
