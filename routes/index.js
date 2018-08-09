const express = require("express");
const ctrl = require("./../controllers");
const router = express.Router();

router.post("/create/bookings", ctrl.bookings.create);
router.get("/rooms/:id/bookings", ctrl.bookings.read);
router.put("/update/bookings", ctrl.bookings.update);
router.delete("/delete/:id/bookings", ctrl.bookings.delete);

module.exports = router;


