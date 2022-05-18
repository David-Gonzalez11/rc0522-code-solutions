/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
isUnderFive(4);

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
isEven(3);

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
startsWithJ('don');

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
isOldEnoughToDrink(13);

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
isOldEnoughToDrive(12);

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
isOldEnoughToDrinkAndDrive(21);

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7) {
    return 'acidic';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
categorizeAcidity(8);

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    return 'Im cute';
  } else {
    return 'Goodnight Everybody';
  }
}
introduceWarnerBro('yakko');
