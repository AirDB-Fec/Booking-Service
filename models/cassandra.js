//drop db if exists
DROP KEYSPACE cycling;

//create db
CREATE KEYSPACE Excelsior
  WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };

  CREATE TABLE rooms.rooms_info (
    roomId int,
    roomName text,
    numberOfBookings int,
    bookings list< frozen<bookings>>,
    price int,
    cleaningFee int,
    serviceFee int,
    minimumStay int,
    maxAdults int,
    maxChildren int,
    maxInfants int,
    taxes int,
    funFactTitles text,
    funFacts text,
    PRIMARY KEY (roomId)
  );

  INSERT INTO rooms.trial1 ( roomId,roomName,numberOfBookings,bookings,price,cleaningFee,serviceFee,minimumStay,maxAdults,maxChildren,maxInfants,taxes,funFactTitles,funFacts) VALUES (1,[{checkIn:'22-01-2018',duration: 1}]);

  


  //use mape for arrays

//send csv files into sufyan database booking_info table
