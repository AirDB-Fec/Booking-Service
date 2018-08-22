//drop database
DROP  DATABASE sufyan;


//create database
CREATE DATABASE sufyan;

//create tables

CREATE TABLE room_infos ( roomId INTEGER, roomName VARCHAR(80), price INTEGER, numberOfBookings INTEGER,   serviceFee INTEGER, cleaningFee INTEGER, minimumStay INTEGER, maxAdults INTEGER, maxChildren INTEGER, maxInfants INTEGER, taxes INTEGER, funFactTitles VARCHAR(225), funFacts VARCHAR(225), PRIMARY KEY (roomId));
CREATE TABLE bookings_infos ( fooid INTEGER, roomId INTEGER ,numberOfBookings INTEGER, checkIn VARCHAR(80), duration INTEGER);

//send csv files into sufyan database booking_info table
COPY bookings_infov FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataMany1.csv' WITH (FORMAT csv);  
COPY bookings_infov FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataMany2.csv' WITH (FORMAT csv); 
COPY bookings_infov FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataMany3.csv' WITH (FORMAT csv); 
COPY bookings_infov FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataMany4.csv' WITH (FORMAT csv); 
COPY bookings_infov FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataMany5.csv' WITH (FORMAT csv); 
COPY bookings_infov FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataMany6.csv' WITH (FORMAT csv); 
COPY bookings_infov FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataMany7.csv' WITH (FORMAT csv); 
COPY bookings_infov FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataMany8.csv' WITH (FORMAT csv); 
COPY bookings_infov FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataMany9.csv' WITH (FORMAT csv); 
COPY bookings_infov FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataMany10.csv' WITH (FORMAT csv); 


//seed csv files into sufyan database 
COPY room_infos FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataRelational1.csv' WITH (FORMAT csv);
COPY room_infos FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataRelational2.csv' WITH (FORMAT csv);
COPY room_infos FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataRelational3.csv' WITH (FORMAT csv);
COPY room_infos FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataRelational4.csv' WITH (FORMAT csv);
COPY room_infos FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataRelational5.csv' WITH (FORMAT csv);
COPY room_infos FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataRelational6.csv' WITH (FORMAT csv);
COPY room_infos FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataRelational7.csv' WITH (FORMAT csv);
COPY room_infos FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataRelational8.csv' WITH (FORMAT csv);
COPY room_infos FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataRelational9.csv' WITH (FORMAT csv);
COPY room_infos FROM '/Users/sufyan/Desktop/SDC/Booking-Service/dataRelational10.csv' WITH (FORMAT csv);




const { Pool, Client } = require('pg')

// pools will use environment variables
// for connection information
const pool = new Pool({
    user: 'sdcuser',
    database: 'sdc',
    port: 3211,
  })

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

// you can also use async/await
const res = await pool.query('SELECT NOW()')
await pool.end()

// clients will also use environment variables
// for connection information
const client = new Client()
await client.connect()

const res = await client.query('SELECT NOW()')
await client.end()