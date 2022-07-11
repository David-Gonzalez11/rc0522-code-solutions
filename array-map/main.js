const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(x => x * 2);
console.log('values for doubled', doubled);
const prices = numbers.map(x => '$' + x.toFixed(2));
console.log('value of prices:', prices);
const upperCased = languages.map(lang => lang.toUpperCase());
console.log('value of upperCased:', upperCased);
const firstLetters = languages.map(letter => letter[0]);
console.log('value of firstLetter:', firstLetters);
