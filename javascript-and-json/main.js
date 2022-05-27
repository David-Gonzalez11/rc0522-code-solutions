var array = [
  {
    ISBN: '445 - 5644 - 444 - 444',
    Title: 'Web Developer',
    Author: 'J.K Rowling'
  },
  {
    ISBN: '256 - 2224 - 7885 - 888',
    Title: 'Unemplpyed',
    Author: 'Random Author'
  },
  {
    ISBN: '330 - 558 - 9968 - 654',
    Title: 'Male',
    Author: 'David'
  }

];
console.log('Value of array:', array);
console.log('Type of the array:', typeof array);
var stringify = JSON.stringify(array);
console.log(stringify);
console.log('value of type of json:', stringify);

var student = '{ "id": 1, "name": "David"}';

console.log('Value of student:', student);
console.log('value of type of student string;', typeof student);
var parse = JSON.parse(student);
console.log('Value of parse', parse);
console.log('Value of typeOf parse:', typeof parse);
