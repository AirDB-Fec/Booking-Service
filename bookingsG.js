const faker = require('faker');

const names = function() {
  var counter = 49487899;
  for (let num = 9000001; num < 10000001; num ++) {
    let numberOfBookings = faker.random.number({
      min: 1,
      max: 10
    });
    for (let i = 0; i < numberOfBookings; i++) {

      let checkIn = faker.date.between('2018-07-24', '2019-12-31');
      let duration = faker.random.number({
        min: 1,
        max: 31
      });
      counter ++;
      console.log(`${counter},${num},${numberOfBookings},${checkIn},${duration}`);
    }
  }

};

names();