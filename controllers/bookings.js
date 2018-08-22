const db = require("../models").pool;
const redis = require("redis");
const client = redis.createClient();

module.exports = {
  get: (req, resp) => {
    var id = req.params.id;
    const query = {
      text:
        "SELECT room_infos.*, ARRAY_TO_STRING((SELECT ARRAY_AGG('[' || numberofbookings || ',' || checkin || ',' || duration || ']') FROM bookings_infov WHERE room_infos.roomid = bookings_infov.roomid), '') FROM room_infos WHERE room_infos.roomid = $1",
      values: [id]
    };
    db.query(query, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        var rooms = res.rows[0];
        // let room = res.rows;
        client.setex(id, 3600, JSON.stringify(rooms));
        resp.send(rooms);
      }
    });
  },

  create: function(req, res) {
    console.log("before assignign", req.body);
    let newRoom = new db.Booking(req.body);
    console.log(newRoom);
    newRoom.save(err => {
      if (err) return res.status(500).send(err);
      return res.status(200).send("success");
    });
  },

  delete: function(req, res) {
    var book = db.Booking;
    console.log(req.params.id);

    book.findOneAndRemove({ roomId: req.params.id }, function(err, book) {
      if (err) return res.status(500).send(err);

      const response = {
        message: "Todo successfully deleted"
      };
      return res.status(200).send(response);
    });
  },

  update: function(req, res) {
    book.findByIdAndUpdate(
      // the id of the item to find
      req.params.id,

      // the change to be made. Mongoose will smartly combine your existing
      // document with this change, which allows for partial updates too
      req.body,

      // an option that asks mongoose to return the updated version
      // of the document instead of the pre-updated one.
      { new: true },

      // the callback function
      (err, todo) => {
        // Handle any possible database errors
        if (err) return res.status(500).send(err);
        return res.send(book);
      }
    );
  }
};
