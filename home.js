window.onscroll = function() {myFunction(), myFunction2()};

//if delete, change "mainPicture" class in CSS visability
function myFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("code").className = "slideUp";
    document.getElementById("myImage").className = "slideUp";
    document.getElementById("buttonsImageCode").className = "slideUp";
    document.getElementById("buttonsImageCode2").className = "slideUp";
  }
}

function myFunction2() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
      document.getElementById("resumeTable1").parentNode.className = "slideUp";
      document.getElementById("resumeTable2").parentNode.className = "slideUp";
    }
  }