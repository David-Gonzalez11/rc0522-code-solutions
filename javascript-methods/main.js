var firstNumber = 4;
var secondNumber = 6;
var thirdNumber = 8;
var maximumValue = Math.max(firstNumber, secondNumber, thirdNumber);
console.log('value of maximumValue:', maximumValue);

var newArray = ['batman', 'iron-man', 'spiderman', 'flash'];
var randomNumber = Math.random();
randomNumber = randomNumber * newArray.length;

var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
var randomHero = newArray[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'JavaScript for Impatient Programmers',
    author: 'Dr. Axel Rauschmayer'
  },
  {
    title: 'Harry potter and the sorcer of stones',
    author: 'J.K Rowling'
  },
  {
    title: 'Diary of a wimpy kid',
    author: 'Jeff peterson'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of the library array:', library);

var fullName = 'David Gonzalez';
var firstAndLastName = fullName.split((' '));
console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
