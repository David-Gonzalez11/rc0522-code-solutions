/* exported defaults */
// iterate over the properties of the source object
// if object(target) at key equals undefined
// assign the target object() the value of key to the new source object at key
function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
