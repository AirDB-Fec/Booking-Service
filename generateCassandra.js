const faker = require('faker');
// const cassandra = require('cassandra-driver');
const words = require('an-array-of-english-words');
const namesArray = require('./name.json');

// const client = new cassandra.Client({ contactPoints: ['127.0.0.1:9042'] });
// client.connect(function (err) {
//   if (err) {
//     console.log(err)    
//   }
//   client.execute("USE rooms", function(err, result) {
//     if (err) {
//       console.log(err);
//     }
//     console.log("USING rooms");
//   });
// });

let createData = function() {
  for (let i = 8000000; i < 10000000; i++) {
    let roomName= namesArray[i];
    let roomId = i + 1;
    
    let price = faker.random.number({
      min: 50,
      max: 400
    });
    
    let numberOfBookings = faker.random.number({
      min: 1,
      max: 10
    });
    
    let bookings = [];
    
    for (let k = 0; k < numberOfBookings; k++) {
      let checkin = faker.date.between('2018-07-24', '2019-12-31');
      let duration = faker.random.number({
        min: 1,
        max: 31
      });

      bookings.push({checkin, duration});
    }
    let serviceFee = faker.random.number({
      min: 15,
      max: 50
    });
    
    let cleaningFee = faker.random.number({
      min: 5,
      max: 35
    });
    
    let minimumStay = faker.random.number({
      max: 3
    });
    
    let maxAdults = faker.random.number({
      min: 2,
      max: 8
    });
    
    let maxChildren = faker.random.number({
      min: 2,
      max: 8
    });
    
    let maxInfants = faker.random.number({
      min: 2,
      max: 4
    });
    
    let taxes = faker.random.number({
      min: 5,
      max: 40
    });
    
    let num1 = faker.random.number({
      max: 5
    });
    
    let num2 = faker.random.number({
      max: 7
    });
    
    const funFactTitles1 = [
      'This house is haunted.',
      'This was Elon Musk\'s first apartment.',
      'This place has a great view of the park.',
      'This place has amazing air conditioning.',
      'This is a very popular booking.',
      'People are talking about this place.'
    ];
    const funFacts1 = [
      'It’s been viewed 500+ times in the past week.',
      `It’s been booked ${taxes} times in the past year.`,
      'The owner takes pictures of all the tenants.',
      'This is a top rated listing.',
      'The owner is a gentleman and a scholar.',
      'The owner is well-liked in his community.',
      'It\'s rated in the top 5% for hospitality.',
      'It\'s rated in the top 5% for cleanliness.'
    ];
    
    funFactTitles = funFactTitles1[num1];
    funFacts = funFacts1[num2];
    
    // const query = 'INSERT INTO rooms.rooms_info (roomId,roomName,numberOfBookings,bookings,price,cleaningFee,serviceFee,minimumStay,maxAdults,maxChildren,maxInfants,taxes,funFactTitles,funFacts) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    // client.execute(query, params, { prepare: true }, function (err) {
    //   if (err) {
    //     console.log(err)
    //   }
    // //Inserted in the cluster
    // });
    // console.log(`${roomId}|${JSON.stringify(bookings)}|${cleaningFee}|${funFacts}|${funFactTitles}|${maxAdults}|${maxChildren}|${maxInfants}|${minimumStay}|${numberOfBookings}|${price}|${roomName}|${serviceFee}|${taxes}`);
    let text = (`${roomId}|${JSON.stringify(bookings).replace(/\"/g,"\'")}|${cleaningFee}|${funFacts}|${funFactTitles}|${maxAdults}|${maxChildren}|${maxInfants}|${minimumStay}|${numberOfBookings}|${price}|${roomName}|${serviceFee}|${taxes}`);
    console.log(text);
  }

};
createData();

