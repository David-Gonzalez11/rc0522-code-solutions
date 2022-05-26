var list = document.querySelector('.task-list');
list.addEventListener('click', handleClick);
function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('value of event.target.tagName:', event.target.tagName);
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  var taskListItem = event.target.closest('.task-list-item');
  console.log('closest item:', taskListItem);
  taskListItem.remove();
}
