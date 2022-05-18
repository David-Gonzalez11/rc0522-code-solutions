/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('value of getNumbersToTen:', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumber = [];
  var currentNumber = 2;
  while (currentNumber < 22) {
    evenNumber.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumber;
}
console.log('value of getEvenNumbers to twenty:', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  console.log('repeatedWord:', repeated);
  return repeated;
}
repeatWord('hello', 5);

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log('value of logEachCharacter:', string[i]);
  }
}
logEachCharacter('David');

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll:', doubleAll([5, 7, 9]));

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
console.log('value of get keys:', getKeys({ name: 'david', title: 'Mr', isbn: 114 - 225 - 555 - 665 }));

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log('value of getValues:', getValues({ name: 'david' }));
