import React from "react";
import ReactDOM from "react-dom";

class NavBar extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}

ReactDOM.render(<a>TEST TEST TEST</a>, document.getElementsById("navbar"));

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
