const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];
const evens = numbers.filter(number => number % 2 === 0);
console.log('Even numbers divisible by 2', evens);
const overFive = numbers.filter(number => number > 5);
console.log('Numbers over five', overFive);
const startWithE = names.filter(name => name.startsWith('E'));
console.log('Names that start with letter E', startWithE);
const haveD = names.filter(letter => letter.includes('D') || letter.includes('d'));
console.log('Names that have a d in them', haveD);
