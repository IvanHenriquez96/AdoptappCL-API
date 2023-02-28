const express = require("express");
const router = express.Router();

const MascotasController = require("../controllers/MascotasController");

router.get("/", MascotasController.getMascotas);

module.exports = router;
