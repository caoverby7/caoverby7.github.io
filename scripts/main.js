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
let container = document.createElement("H1");
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
    skillSection.classList.add("visible");
    experience.classList.remove("clicked-nav");
    experienceSection.classList.remove("visible");
    education.classList.remove("clicked-nav");
    educationSection.classList.remove("visible");
    contact.classList.remove("clicked-nav");
    contactSection.classList.remove("visible");
});
experience.innerText = "Experience";
experience.addEventListener("click", () => {
    experience.classList.add("clicked-nav");
    experienceSection.classList.add("visible");
    skills.classList.remove("clicked-nav");
    skillSection.classList.remove("visible");
    education.classList.remove("clicked-nav");
    educationSection.classList.remove("visible");
    contact.classList.remove("clicked-nav");
    contactSection.classList.remove("visible");
});
education.innerText = "Education";
education.addEventListener("click", () => {
    education.classList.add("clicked-nav");
    educationSection.classList.add("visible");
    skills.classList.remove("clicked-nav");
    skillSection.classList.remove("visible");
    experience.classList.remove("clicked-nav");
    experienceSection.classList.remove("visible");
    contact.classList.remove("clicked-nav");
    contactSection.classList.remove("visible");
});
contact.innerText = "Contact";
contact.addEventListener("click", () => {
    contact.classList.add("clicked-nav");
    contactSection.classList.add("visible");
    skills.classList.remove("clicked-nav");
    skillSection.classList.remove("visible");
    experience.classList.remove("clicked-nav");
    experienceSection.classList.remove("visible");
    education.classList.remove("clicked-nav");
    educationSection.classList.remove("visible");
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
    siteContainer.appendChild(skillSection);
    siteContainer.appendChild(experienceSection);
    siteContainer.appendChild(educationSection);
    siteContainer.appendChild(contactSection);
});


/*

RESUME SECTIONS

*/

/* SKILL SECTION */
let skillSection = document.createElement("DIV");
let innerContainer = document.createElement("DIV");
let skillContainer = document.createElement("OL");
let skillNode = document.createElement("LI");
let skillWeb = document.createElement("LI");
let skillCSS = document.createElement("LI");
let yearContainer = document.createElement("OL");
let nodeYear = document.createElement("LI");
let webYear = document.createElement("LI");
let CSSYear = document.createElement("LI");
skillNode.innerText = "NodeJS (Express)";
skillWeb.innerText = "Front End Web Stack (HTML, CSS, JS)";
skillCSS.innerText = "CSS (SCSS, Bootstrap)";
nodeYear.innerText = "2 Years";
webYear.innerText = "3 Years";
CSSYear.innerText = "3 Years";
skillContainer.append(skillNode, skillWeb, skillCSS);
yearContainer.append(nodeYear, webYear, CSSYear);
innerContainer.append(skillContainer, yearContainer);
skillSection.appendChild(innerContainer);
innerContainer.classList.add("skill-section")
skillSection.classList.add("section-text", "section-container", "invisible");


/* EXPERIENCE SECTION */
let experienceSection = document.createElement("DIV");
let jobOneContainer = document.createElement("DIV");
let jobTwoContainer = document.createElement("DIV");
let jobTitleOne = document.createElement("H2");
let jobDescOne = document.createElement("P");
let jobTitleTwo = document.createElement("H2");
let jobDescTwo = document.createElement("P");
jobTitleOne.innerText = "01/2018 to Current | Missouri State University | Full-Time Student"
jobTitleTwo.innerText = "01/2018 to 05/2018 | ADsmith Marketing | Digital Coordinator"
jobDescOne.innerText = "Completing a Bachelors of Science in Computer Science as well as a certificate of Web Development."
jobDescTwo.innerText = "In charge of SEO and SEM actions on behalf of multiple clients and websites. Composed blogs and social media posts based upon keyword research for clients. Performed maintenance on client's websites varying from repairing broken links and site maps to modifying CSS and HTML where necessary."
jobTitleOne.className = "section-title";
jobTitleTwo.className = "section-title";
jobOneContainer.append(jobTitleOne, jobDescOne);
jobTwoContainer.append(jobTitleTwo, jobDescTwo);
experienceSection.append(jobOneContainer, jobTwoContainer);
experienceSection.classList.add("section-text", "section-container", "invisible");


/* EDUCATION SECTION */
let educationSection = document.createElement("DIV");
let eduOneContainer = document.createElement("DIV");
let eduTwoContainer = document.createElement("DIV");
let eduOneTitle = document.createElement("H2");
let eduTwoTitle = document.createElement("H2");
let eduOneDesc = document.createElement("P");
let eduTwoDesc = document.createElement("P");
eduOneTitle.innerText = "2021 | Missouri State University | Bachelor of Science: Computer Science";
eduTwoTitle.innerText = "2014 | Springfield Central High School | High School Diploma";
eduOneDesc.innerText = "• Minor in Chemistry \n• Certificate in Web Development";
eduTwoDesc.innerText = "• Received International Baccalaureate Certificate";
eduOneTitle.className = "section-title";
eduTwoTitle.className = "section-title";
eduOneContainer.append(eduOneTitle, eduOneDesc);
eduTwoContainer.append(eduTwoTitle, eduTwoDesc);
educationSection.append(eduOneContainer, eduTwoContainer);
educationSection.classList.add("section-text", "section-container", "invisible");


/* CONTACT SECTION */
let contactSection = document.createElement("DIV");
let contactContainer = document.createElement("OL");
let name = document.createElement("LI");
let email = document.createElement("LI");
let phone = document.createElement("LI");
let anchorContainer = document.createElement("LI");
let indeed = document.createElement("A");
name.innerText = "Connor Overby";
email.innerText = "caoverby7@gmail.com";
phone.innerText = "417-841-7806";
indeed.href = "https://my.indeed.com/p/connoro-rdt2xof";
indeed.innerText = "Resumé";
anchorContainer.appendChild(indeed);
contactContainer.append(name, email, phone, anchorContainer);
contactSection.appendChild(contactContainer);
contactSection.classList.add("section-text", "section-container", "invisible");
contactContainer.classList.add("contact-section");