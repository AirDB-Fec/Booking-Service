const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  roomId: Number,
  numberOfBookings: Number,
  bookings: [{ checkIn: Date, duration: Number }],
  price: Number,
  cleaningFee: Number,
  serviceFee: Number,
  minimumStay: Number,
  maxAdults: Number,
  maxChildren: Number,
  maxInfants: Number,
  taxes: Number,
  funFactTitles: String,
  funFacts: String
});

const Booking = mongoose.model('Booking', BookingSchema);



CREATE TABLE room_info (
  roomId INTEGER,
  numberOfBookings INTEGER,
  price INTEGER,
  cleaningFee INTEGER,
  serviceFee INTEGER,
  minimumStay INTEGER,
  maxAdults INTEGER,
  maxChildren INTEGER,
  maxInfants INTEGER,
  taxes INTEGER,
  funFactTitles VARCHAR(40),
  funFacts VARCHAR(40),
  PRIMARY KEY (roomId)
);

module.exports = Booking;
