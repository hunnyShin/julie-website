console.log("This is Julie. Nice to meet you!")

var containers = $(".container");

function menuToggle() {
  console.log("work")
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
