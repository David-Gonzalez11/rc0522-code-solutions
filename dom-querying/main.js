console.log('hello, world');

var heading1 = document.querySelector('h1');
console.log('targetting heading element', heading1);
console.dir(heading1);

var explanation = document.querySelector('#explanation');
console.log('targetting id attribute:', explanation);
console.dir(explanation);

var hint = document.querySelector('.hint');
console.log('logging out the class selector for hint:', hint);
console.dir(hint);

var paragraph = document.querySelectorAll('p');
console.log('results for all paragraph nodes:', paragraph);

var example = document.querySelectorAll('.example-link');
console.log('results for all node list with example-link class:', example);
