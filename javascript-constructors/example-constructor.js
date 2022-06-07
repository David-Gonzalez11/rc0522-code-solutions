function ExampleConstructor() {

}
console.log('value of prototype', ExampleConstructor);
console.log('typeOf prototype', typeof ExampleConstructor);
var newFunction = new ExampleConstructor();
console.log('value of newFunction', newFunction);
console.log('value of instanceOf', newFunction instanceof ExampleConstructor);
