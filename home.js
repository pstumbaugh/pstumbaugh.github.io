/*
window.onscroll = function () {
    reveal1(),
        reveal2(),
        reveal3(),
        reveal4(),
        reveal5(),
        reveal6(),
        reveal7(),
        reveal8(),
        reveal9();
};

//if delete, change "mainPicture" class in CSS visability
function reveal1() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById("code").className = "slideUp";
        document.getElementById("myImage").className = "slideUp";
        document.getElementById("buttonsImageCode").className = "slideUp";
        document.getElementById("buttonsImageCode2").className = "slideUp";
    }
}

function reveal2() {
    if (
        document.body.scrollTop > 450 ||
        document.documentElement.scrollTop > 450
    ) {
        document.getElementById("revealWorkExperience1").className = "slideUp";
        document.getElementById("revealWorkExperience2").className = "slideUp";
    }
}

function reveal3() {
    if (
        document.body.scrollTop > 875 ||
        document.documentElement.scrollTop > 875
    ) {
        document.getElementById("hikersGuideReveal").className = "slideUp";
    }
}

function reveal8() {
    if (
        document.body.scrollTop > 1100 ||
        document.documentElement.scrollTop > 1100
    ) {
        document.getElementById("artGalleryReveal").className = "slideUp";
    }
}

function reveal4() {
    if (
        document.body.scrollTop > 1500 ||
        document.documentElement.scrollTop > 1500
    ) {
        document.getElementById("minesweeperReveal").className = "slideUp";
    }
}

function reveal5() {
    if (
        document.body.scrollTop > 1850 ||
        document.documentElement.scrollTop > 1850
    ) {
        document.getElementById("smallShellReveal").className = "slideUp";
    }
}

function reveal9() {
    if (
        document.body.scrollTop > 2250 ||
        document.documentElement.scrollTop > 2250
    ) {
        document.getElementById("wasteagramReveal").className = "slideUp";
    }
}

function reveal6() {
    if (
        document.body.scrollTop > 2600 ||
        document.documentElement.scrollTop > 2600
    ) {
        document.getElementById("ASMReveal").className = "slideUp";
    }
}

function reveal7() {
    if (
        document.body.scrollTop > 2950 ||
        document.documentElement.scrollTop > 2950
    ) {
        document.getElementById("mapReveal").className = "slideUp";
    }
}
*/

window.onscroll = function () {
    myFunction();
};
var navbar = document.getElementsByClassName("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

//displays the welcome page text and up arrows when user loads page
function welcomePageDisplay() {
    //immediately fade in the "about" section
    document.getElementById("about").className = "fade-in-image";
    delayedFadeIn("swipeUpArrows", 2000);
    delayedFadeIn("navbar", 1000);
}

//delays the fade in of an item.
//Uses the item's ID (as string) and time in milliseconds for delay
function delayedFadeIn(itemClassIdString, delayTimeMilliseconds) {
    setTimeout(function () {
        document.getElementById(itemClassIdString).className = "fade-in-image";
    }, delayTimeMilliseconds);
}

//start the page at the bottom instead of the top
function toBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

window.onload = toBottom;
window.onload = welcomePageDisplay;
