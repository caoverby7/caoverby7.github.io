console.log("MAIN.JS LOADED");


/* 

VARIABLE DECLARATION 

*/

let siteContainer = document.getElementById("wrapper");


/* 

FUNCTION DECLARATION 

*/

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


/* 

MASTHEAD SECTION 

*/

let mastheadContainer = document.createElement("DIV");
let titleContainer = document.createElement("DIV");
let container = document.createElement("h1");
let titleText = document.createTextNode("Hi, I'm Connor");
let subContainer = document.createElement("H1");
let subText = document.createTextNode("I'm a Front-End Web Developer");
subContainer.className = "masthead-subtitle typewriter-secondary";
subContainer.appendChild(subText);
container.className = "masthead-title typewriter-initial";
container.appendChild(titleText);
titleContainer.className = "masthead-text";
titleContainer.appendChild(container);
mastheadContainer.className = "masthead-container";
mastheadContainer.appendChild(titleContainer);
siteContainer.appendChild(mastheadContainer);

var animationEvent = whichAnimationEvent();
animationEvent && container.addEventListener(animationEvent, () => {
    titleContainer.removeChild(container);
    titleContainer.appendChild(subContainer);
});


/*

NAV SECTION

*/

let navContainer = document.createElement("DIV");
let nav = document.createElement("NAV");
let skills = document.createElement("A")
skills.className = "nav-link";
let experience = document.createElement("A")
experience.className = "nav-link";
let education = document.createElement("A")
education.className = "nav-link";
let contact = document.createElement("A")
contact.className = "nav-link";
skills.innerText = "Skills";
skills.addEventListener("click", () => {
    skills.classList.add("clicked-nav");
    experience.classList.remove("clicked-nav");
    education.classList.remove("clicked-nav");
    contact.classList.remove("clicked-nav");
});
experience.innerText = "Experience";
experience.addEventListener("click", () => {
    experience.classList.add("clicked-nav");
    skills.classList.remove("clicked-nav");
    education.classList.remove("clicked-nav");
    contact.classList.remove("clicked-nav");
});
education.innerText = "Education";
education.addEventListener("click", () => {
    education.classList.add("clicked-nav");
    skills.classList.remove("clicked-nav");
    experience.classList.remove("clicked-nav");
    contact.classList.remove("clicked-nav");
});
contact.innerText = "Contact";
contact.addEventListener("click", () => {
    contact.classList.add("clicked-nav");
    skills.classList.remove("clicked-nav");
    experience.classList.remove("clicked-nav");
    education.classList.remove("clicked-nav");
});
nav.appendChild(skills);
nav.appendChild(experience);
nav.appendChild(education);
nav.appendChild(contact);
navContainer.appendChild(nav);
navContainer.className = "nav-fade-in";


animationEvent && subContainer.addEventListener(animationEvent, () => {
    console.log("EDITING CONTAINER");
    siteContainer.removeChild(mastheadContainer);
    siteContainer.appendChild(navContainer);
});