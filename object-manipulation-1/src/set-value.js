/* exported setValue */
// create  a variable and set its value to the object at key and then assign that value to the value parameter
// return the object variable just created
function setValue(object, key, value) {
  var Object = (object[key] = value);
  return Object;
}
