/* exported reverseWords */
// define a new varibale and set it equal to the str parameter then call the split method and use a space as the methods parameter
// use the map method to map over all the characters and reverse the characters with the reverse method and then join them back together with no spaces
// return the join method with a space as its parameter of the reversedWordArr
function reverseWords(str) {
  var reverseWordArr = str.split(' ').map(word => word.split('').reverse().join(''));
  return reverseWordArr.join(' ');
}
