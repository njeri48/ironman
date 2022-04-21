window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("logo").className = "test";
  } else {
    document.getElementById("logo").className = "";
  }
}
