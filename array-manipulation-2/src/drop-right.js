/* exported dropRight */
// use the slice method on the array and give 0(where to start) as its first argument and -count(which is a negative index on which values to drop)
function dropRight(array, count) {
  return array.slice(0, -count);
}
