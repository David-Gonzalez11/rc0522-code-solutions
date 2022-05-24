var $allSpans = document.querySelectorAll('span');
var index = 0;
document.addEventListener('keydown', keyDown);
function keyDown(event) {
  if (event.key === $allSpans[index].textContent) {
    $allSpans[index].className = 'correct-char';
    index++;
    $allSpans[index].className = 'border-bottom';
  } else {
    $allSpans[index].className = 'incorrect-char border-bottom-red';

  }
}
