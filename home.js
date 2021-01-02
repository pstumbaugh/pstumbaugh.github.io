window.onscroll = function() {myFunction(), myFunction2()};

function myFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("code").className = "slideUp";
    document.getElementById("myImage").className = "slideUp";
    document.getElementById("buttonsImageCode").className = "slideUp";
    document.getElementById("buttonsImageCode2").className = "slideUp";
  }
}

function myFunction2() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("myImage").className = "slideUp";
    }
  }