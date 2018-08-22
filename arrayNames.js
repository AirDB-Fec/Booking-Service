const words = require('an-array-of-english-words');

var storage = [];
const names = function() {
  let num = 1;
  for (let j = 0; j < words.length; j++) {
    for (let i = 93781; i < 93818; i++) {
      storage.push(`${words[j]}_${words[i]}`);
      num++;
      if (num > 10000000) return;
    }
  }
}
  names()
  console.log(JSON.stringify(storage));