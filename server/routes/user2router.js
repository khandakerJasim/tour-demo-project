const express = require("express");
const router = express.Router();
const { Isadmin, Authentical } = require("./../middleware/Authentication");
const user2controler = require("./../controler/User2controler");

router.post("/api/post", user2controler.register2);

router.post("/api/login2", user2controler.loginuser);

router.get("/api/alluser", user2controler.alluser);

router.get(
  "/api/singleuser/:id",
  Authentical,
  Isadmin,
  user2controler.singleuser
);

router.put(
  "/api/updateuser2/:id",
  Authentical,
  Isadmin,
  user2controler.updateuser
);

router.delete("/api/deleteuser2/:id", user2controler.deleteuser);

module.exports = router;
