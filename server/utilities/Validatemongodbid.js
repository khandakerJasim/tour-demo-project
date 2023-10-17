const mongoose = require("mongoose");

const validateid = (id) => {
  const isvalid = mongoose.Types.ObjectId(id);
  if (!isvalid) throw new Error("this is not valid and id is not found");
};
module.exports = validateid;
