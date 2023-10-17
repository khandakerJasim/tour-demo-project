const express = require("express");
const usercontroler = require("./../controler/usercontroler");
const upload = require("./../multerinfig/Storageconfig");
const router = express.Router();

router.post("/api/register", upload.single("photo"), usercontroler.Register);

module.exports = router;
