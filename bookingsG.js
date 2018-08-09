const faker = require('faker');

const names = function() {

  for (let num = 1; num < 10000001; num ++) {
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
      console.log(`${num},${numberOfBookings},${checkIn},${duration}`);
    }
    num++;
  }

};

names();