/* exported reverseWords */
function reverseWords(str) {
  const reverseWordArr = str.split(' ').map(word => word.split('').reverse().join(''));
  return reverseWordArr.join(' ');
}
