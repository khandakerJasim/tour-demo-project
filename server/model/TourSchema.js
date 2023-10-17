const mongoose = require("mongoose");

const tourschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: String,
      required: true,
    },
    avgRating: {
      type: Number,
      required: true,
    },
    featured: {
      type: Boolean,
      required: true,
    },
    photo1: {
      type: String,
      required: true,
    },
    photo2: {
      type: String,
      required: true,
    },
    review: [],
  },
  { timestamps: true }
);

//create model

const Tours = new mongoose.model("TOUR", tourschema);

module.exports = Tours;
