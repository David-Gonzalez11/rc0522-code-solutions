/* exported isAnagram */
/*
//update the first paramter to remove all spaces and substitue them with an no space and then sort the array by indivisual characters with the split method
// then use the sort method to make indivisual charcters be in order and then join them back togethet with the join method
////update the second paramter to remove all spaces and substitue them with an no space and then sort the array by indivisual characters with the split method
// then use the sort method to make indivisual charcters appear in order and join them together with the join method
// then check if  first is equal to second and return it

*/

function isAnagram(first, second) {
  first = first.replaceAll(' ', '').split('').sort().join('');
  second = second.replaceAll(' ', '').split('').sort().join('');
  return first === second;
}
