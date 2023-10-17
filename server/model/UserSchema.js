const mongoose = require("mongoose");
const validator = require("email-validator");

//schema create
const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      validate: function () {
        return validator.validate(this.email);
      },
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cpassword: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

//create mongoose mondel

const User = new mongoose.model("Touruser", userschema);

module.exports = User;
