var overlay = document.querySelector('#overlay');
var showModal = document.querySelector('#show-modal-btn');
var closeModal = document.querySelector('#close-modal-btn');

showModal.addEventListener('click', handleClick);

closeModal.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target === showModal) {
    overlay.classList.remove('hidden');
console.log(event)
  } else if (event.target === closeModal) {
    overlay.classList.add('hidden');
  }
}
