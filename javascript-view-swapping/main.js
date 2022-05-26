var tabs = document.querySelectorAll('.tab');
var views = document.querySelectorAll('.view');
var tabContainer = document.querySelector('.tab-container');
tabContainer.addEventListener('click', hanndleClick);
function hanndleClick(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i] === event.target) {
        tabs[i].className = 'tab active';
      } else {
        tabs[i].className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var x = 0; x < views.length; x++) {
      if (views[x].getAttribute('data-view') === dataView) {
        views[x].className = 'view';
      } else {
        views[x].className = 'hidden';
      }
    }
  }
}
