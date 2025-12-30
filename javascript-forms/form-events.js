function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);

}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name:', event.target.name);

}

function handleInput(event) {
  console.log('Value of', event.target.name + ':', event.target.value);
}

var userName = document.querySelector('#user-name');
var email = document.querySelector('#user-email');
var textarea = document.querySelector('#user-message');

userName.addEventListener('focus', handleFocus);
email.addEventListener('focus', handleFocus);
textarea.addEventListener('focus', handleFocus);

userName.addEventListener('blur', handleBlur);
email.addEventListener('blur', handleBlur);
textarea.addEventListener('blur', handleBlur);

userName.addEventListener('input', handleInput);
email.addEventListener('input', handleInput);
textarea.addEventListener('input', handleInput);
