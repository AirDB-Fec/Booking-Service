const words = require('an-array-of-english-words');
const faker = require('faker');

const names = function() {
  let num = 1;
  for (let j = 0; j < words.length; j++) {
    for (let i = 93781; i < 93818; i++) {
      var price = faker.random.number({
        min: 50,
        max: 400
      });
      var numberOfBookings = faker.random.number({
        min: 1,
        max: 45
      });
      var serviceFee = faker.random.number({
        min: 15,
        max: 50
      });
      var cleaningFee = faker.random.number({
        min: 5,
        max: 35
      });
      var minimumStay = faker.random.number({
        max: 3
      });
    
      var maxAdults = faker.random.number({
        min: 2,
        max: 8
      });
    
      var maxChildren = faker.random.number({
        min: 2,
        max: 8
      });
    
      var maxInfants = faker.random.number({
            min: 2,
            max: 4
          });
    
          var taxes = faker.random.number({
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
            `It’s been booked ${ taxes} times in the past year.`,
            'The owner takes pictures of all the tenants.',
            'This is a top rated listing.',
            'The owner is a gentleman and a scholar.',
            'The owner is well-liked in his community.',
            'It\'s rated in the top 5% for hospitality.',
            'It\'s rated in the top 5% for cleanliness.'
          ];
    
          var funFactTitles = funFactTitles1[num1];
          var funFacts = funFacts1[num2];

        
      console.log(`${num},${words[j]}_${words[i]},${price},${numberOfBookings},${serviceFee},${cleaningFee},${minimumStay},${maxAdults},${maxChildren},${ maxChildren},${maxInfants},${taxes},${funFactTitles},${funFacts}`);
      num++;
      if (num > 10000000) return;
    }
  }
}

names();



  
      
        
