const takeAChance = require('./take-a-chance');
const newPromise = takeAChance('David');

newPromise.then(value => {
  console.log(value);
});
newPromise.catch(error => {
  console.log(error.message);
});
