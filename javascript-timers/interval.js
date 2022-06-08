var countDownDisplay = document.querySelector('.countdown-display');
var count = 4;
var countDown;
function counter() {
  count--;
  if (count > 0) {
    countDownDisplay.textContent = count;
  } else {
    countDownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countDown);
  }
}
setInterval(counter, 1000);
