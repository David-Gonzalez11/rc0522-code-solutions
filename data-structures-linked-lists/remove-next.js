/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    list.next = list.next.next;
  }
}

// function updateNext(list, value) {
//   if (list.next !== null) {
//     list.next.data = value;
//   }
// }
