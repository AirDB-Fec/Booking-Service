const db = require('../models');

module.exports = {
  read: (req, res, next) => {
    const roomId = req.params.id;
    db.Booking.find({ roomId: roomId })
      .exec()
      .then(data => {
        if (!data || !data.length) {
          next();
        } else {
          // console.log('sample items', data[0].bookings);
          res.json(data);
        }
      })
      .catch(next);
  },

  create: function(req, res) {
    console.log('before assignign', req.body)
    let newRoom = new db.Booking(req.body);
    console.log(newRoom)
    newRoom.save(err => {  
      if (err) return res.status(500).send(err);
      return res.status(200).send("success");
    });
  },

  delete: function(req, res) {
    var book = db.Booking;
    console.log(req.params.id);
 
    book.findOneAndRemove({roomId: req.params.id}, function(err, book) {
      if (err) return res.status(500).send(err);

      const response = {
        message: "Todo successfully deleted",
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
      {new: true},
  
      // the callback function
      (err, todo) => {
      // Handle any possible database errors
        if (err) return res.status(500).send(err);
        return res.send(book);
      }
    );
  }


};
