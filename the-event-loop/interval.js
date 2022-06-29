let count = 3;
let interval = null;
interval = setInterval(() => {
  if (count === 0) {
    clearInterval(interval);
    return console.log('Blast off!');
  }
  console.log(count);
  count--;

}, 1000);
