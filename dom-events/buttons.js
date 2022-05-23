function handleClick(event) {
  console.log('button clicked');
  console.log('event object', event);
  console.log('event.target:', event.target);
}
var $buttons = document.querySelector('.click-button');
$buttons.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('target:', event.target);
}
var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}
var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick);
