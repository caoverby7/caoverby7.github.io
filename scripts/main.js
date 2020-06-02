console.log("MAIN.JS LOADED");
let titleContainer = document.getElementById("masthead-text");
let text = document.createTextNode("Hi, I'm Connor");
let container = document.createElement("h1")

container.className = "masthead-title typewriter-initial";
container.appendChild(text);
titleContainer.appendChild(container);

console.log(container.innerText);

function whichAnimationEvent() {
    var t;
    var el = document.createElement('fakeelement');
    var animations = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
    }

    for (t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
}

/* Listen for a animation! */
var animationEvent = whichAnimationEvent();
animationEvent && container.addEventListener(animationEvent, function () {
    console.log("EDITING CONTAINER");
    container.innerText = "I'm a Front-End Web Developer";
    container.className = "masthead-subtitle typewriter-secondary"
    console.log(container.innerText);
});

// text = document.createTextNode("I'm a Front-End Web Developer");
// container = document.createElement("h2")
// container.className = "masthead-subtitle  typewriter-secondary";
// container.appendChild(text);
// titleContainer.appendChild(container);
