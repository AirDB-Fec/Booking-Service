"use strict";

const express = require("express");
const redis = require("redis");
const db = require("../models");
const client = redis.createClient();
const ctrl = require("./../controllers");
const router = express.Router();
// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers

// router.get("/rooms/:id", ctrl.bookings.get);

router.get("/rooms/:id", (req, res) => {
  let id = req.params.id;
  //Check the cache data from the server redis
  client.get(id, (error, result) => {
    if (result) {
      res.send(result);
    } else {
      ctrl.bookings.get(req, res);
    }
  });
});

// export our router to be mounted by the parent application
module.exports = router;
