const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const decisionMaker = process.argv[3];
if (decisionMaker === 'plus') {
  console.log(add(process.argv[2], process.argv[4]));
} else if (decisionMaker === 'subtract') {
  console.log(subtract(process.argv[2], process.argv[4]));
} else if (decisionMaker === 'multiply') {
  console.log(multiply(process.argv[2], process.argv[4]));
} else if (decisionMaker === 'divide') {
  console.log(divide(process.argv[2], process.argv[4]));
}
