const projectGrid = document.querySelector('[data-project-grid]');
const projectTemplate = document.querySelector('[data-project-template]');

const projects = [
    {
        link: "https://bdeering1.github.io/Visual-Sorting-App",
        image: "resources/Visual Sorting.png",
        title: "Visual Sorting App",
        desc: "Sorting algorithm learning tool (React and Redux)\n\n",
        more: "• Fully responsive and cross browser compatible\n• Modular and scalable design"
    },
    {
        link: "https://bdeering1.github.io/To-Do-List/",
        image: "resources/To Do List.png",
        title: "To Do List",
        desc: "Personal organization tool (Javascript and SASS)\n\n",
        more: "• event listeners, DOM manipulation, and browser storage\n• css custom properties, pseudo elements, layouts"
    },
    {
        link: "https://codepen.io/bdeering1/full/QWKxemq",
        image: "resources/Calculator.png",
        title: "Calculator",
        desc: "Virtual calculator app (React and SASS)\n\n",
        more: "• responsize design\n• component functions and state manipulation"
    },
    {
        link: "https://codepen.io/bdeering1/full/OJRZWEy",
        image: "resources/Drum Machine.png",
        title: "Drum Machine",
        desc: "Virtual drum machine (React and Bootstrap 4)\n\n",
        more: "• lifecycle methods, ES6 functionality\n• bootstrap integration"
    }
]

window.onload = () => {
    projects.forEach((proj) => {
        const projectTile = document.importNode(projectTemplate.content, true);
        const anchor = projectTile.querySelector('a');
        anchor.href = proj.link;
        const image = projectTile.querySelector('img');
        image.src = proj.image;
        const title = projectTile.querySelector('h2');
        title.innerHTML = proj.title;
        const desc = projectTile.querySelectorAll('p');
        desc[0].innerHTML = proj.desc;
        desc[1].innerHTML = proj.more;
        projectGrid.appendChild(projectTile);
    })
}

//Initial Scroll to Projects Area
window.onscroll = function(e) {
    if (this.oldScroll <= this.scrollY && !this.scrolled && window.pageYOffset < 100 && window.innerWidth > 850) {
        this.scrolled = true;
        window.scroll({
            top: findPos(document.getElementById("projects")),
            left: 0,
            behavior: 'smooth'
        })
    }
    this.oldScroll = this.scrollY;
}

//Backgrounsd parallax effect
window.addEventListener("scroll", parallax);

function parallax() {
    if (window.innerHeight <= 1280) {
        let s = document.getElementById("img-container");
        var yPos = -window.pageYOffset / 30;
        s.style.top = yPos + "%";
    }
}

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}