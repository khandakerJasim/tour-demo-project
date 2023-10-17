const mongoose = require("mongoose");
const Connect = async (DATABASE) => {
  try {
    const options = {
      DBName: process.env.DBName,
    };

    await mongoose.connect(DATABASE, options);
    console.log("mongodb connect successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = Connect;
