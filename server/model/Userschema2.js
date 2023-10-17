const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("email-validator");

const usershema2 = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    lname: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: function () {
        return validator.validate(this.email);
      },
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    Address: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Address" }],

    Cart: {
      type: Array,
      default: [],
    },
    wishlist: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Product" }],
  },

  { timestamps: true }
);

usershema2.pre("save", async function (next) {
  const saltpass = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, saltpass);
});

usershema2.methods.isPasswordMatch = async function (enteredpassword) {
  return await bcrypt.compare(enteredpassword, this.password);
};
const User2 = new mongoose.model("user2", usershema2);

module.exports = User2;
