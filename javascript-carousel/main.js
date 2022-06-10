var images = ['images/025.png', 'images/001.png', 'images/004.png', 'images/007.png', 'images/039.png'];

var currentIndex = 0;

var arrowLeft = document.querySelector('.fa-angle-left');
arrowLeft.addEventListener('click', arrowLeftClick);
var arrowRight = document.querySelector('.fa-chevron-right ');
arrowRight.addEventListener('click', arrowRightClick);
var img = document.querySelector('img');

function arrowLeftClick(event) {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
    img.setAttribute('src', images[4]);
  } else if (event.target === arrowLeft) {
    img.setAttribute('src', images[currentIndex]);
    currentIndex--;
  }
}

function arrowRightClick(event) {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
    img.setAttribute('src', images[0]);
  } else if (event.target === arrowRight) {
    currentIndex++;
    img.setAttribute('src', images[currentIndex]);
  }
}

function carouselPokemon() {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
    img.setAttribute('src', images[currentIndex]);
  }
}
var countDownInterval = setInterval(carouselPokemon, 3000);

var $circles = document.querySelectorAll('.fa-circle');
var $circlesDiv = document.querySelector('.buttons');
$circlesDiv.addEventListener('click', handleCircles);
function handleCircles(event) {
  var dataView = event.target.getAttribute('data-view');
  var dataIndex = parseInt(dataView);
  cirlceColorChange(dataIndex);
  img.setAttribute('src', images[dataIndex]);

}

function cirlceColorChange(number) {
  for (var i = 0; i < $circles.length; i++) {
    if (number === parseInt($circles[i].getAttribute('data-view'))) {
      $circles[i].className = 'fas fa-circle circle-icon fa-2x';
    } else {
      $circles[i].className = 'far fa-circle circle-icon fa-2x';
    }
  }
}
