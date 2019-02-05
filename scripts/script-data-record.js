window.onscroll = function() {aFunction()};

var topBar = document.getElementById("topBar");

var sticky = topBar.offsetTop;

function aFunction() {
  if (window.pageYOffset >= sticky) {
    topBar.classList.add("sticky")
  } else {
    topBar.classList.remove("sticky");
  }
}
