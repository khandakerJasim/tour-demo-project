const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const cors = require("cors");
const Connect = require("./connection/Connectdb");
const DATABASE = process.env.DATABASE;
const userouter = require("./routes/useRouter");
const tourrouter = require("./routes/Tourrouter");

const user2router = require("./routes/user2router");

const app = express();

//database connect
Connect(DATABASE);

// mongoose
//   .connect("mongodb://127.0.0.1:27017/Tour")
//   .then(() => console.log("mongoose connect successfully"))
//   .catch((err) => console.log(err));
//cors setup
app.use(cors());

//body-parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routeruse
app.use(userouter);
app.use(tourrouter);
app.use(user2router);

module.exports = app;
