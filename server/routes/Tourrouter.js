const express = require("express");
const tourcontroler = require("./../controler/Tonrcontroler");
const router = express.Router();

router.post("/api/tour", tourcontroler.tourpost);

router.get("/api/get", tourcontroler.gettour);

router.get("/api/single/:id", tourcontroler.singletour);

//delete

router.delete("/api/delete/:id", tourcontroler.deletetour);

//update

router.put("/api/update/:id", tourcontroler.updatetour);

module.exports = router;
