


var div = document.querySelector(".firstdiv");
var body = document.querySelector("#back")
var isActive= false;
 

function handleCLick(event){
if(isActive === false){
  div.className="firstdiv off";
  body.className="back";
} else {
  body.className = ""
  div.className="firstdiv"
}
isActive = !isActive
}
div.addEventListener('click', handleCLick)
// var div = document.querySelector('.firstdiv');
// var body = document.querySelector('#back');
// var isActive = false;

// function handleCLick(event) {
//   if (isActive === false) {
//     div.className = 'firstdiv off';
//     body.className = 'back';
//   } else if (isActive === true) {
//     body.className = '';
//     div.className = 'firstdiv';
//   }
//   isActive = !isActive;
// }
// div.addEventListener('click', handleCLick);
