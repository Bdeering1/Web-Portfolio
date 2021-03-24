const projectGrid = document.querySelector('[data-project-grid]');
const projectTemplate = document.querySelector('[data-project-template]');

const projects = [
    {
        link: "https://bdeering1.github.io/Visual-Sorting-App",
        image: "resources/Visual Sorting.png",
        title: "Visual Sorting App",
        desc: "Sorting algorithm learning tool (React and Redux)",
        more: "• Fully responsive and cross browser compatible\n• Modular and scalable design"
    },
    {
        link: "https://bdeering1.github.io/To-Do-List/",
        image: "resources/To Do List.png",
        title: "To Do List",
        desc: "Personal organization tool (Javascript and SASS)",
        more: "• event listeners, DOM manipulation, and browser storage\n• css custom properties, pseudo elements, layouts"
    },
    {
        link: "https://codepen.io/bdeering1/full/QWKxemq",
        image: "resources/Calculator.png",
        title: "Calculator",
        desc: "Virtual calculator app (React and SASS)",
        more: "• responsize design\n• component functions and state manipulation"
    },
    {
        link: "https://codepen.io/bdeering1/full/OJRZWEy",
        image: "resources/Drum Machine.png",
        title: "Drum Machine",
        desc: "Virtual drum machine (React and Bootstrap 4)",
        more: "• lifecycle methods, ES6 functionality\n• bootstrap integration"
    }
]

window.onload = () => {
    projects.forEach((proj) => {
        const projectTile = document.importNode(projectTemplate.content, true);
        const anchor = projectTile.querySelector('a');
        anchor.href = proj.link;
        const title = projectTile.querySelector('.project-title');
        title.innerHTML = proj.title;
        const desc = projectTile.querySelector('.project-desc');
        desc.innerHTML = proj.desc;
        const more = projectTile.querySelector('.project-features');
        more.innerHTML = proj.more;
        const image = projectTile.querySelector('.project-img');
        image.src = proj.image;
        image.alt = proj.title + " project image";
        projectGrid.appendChild(projectTile);
    })
}

//Initial Scroll to Projects Area
window.onscroll = function(e) {
    if (this.oldScroll <= this.scrollY && !this.scrolled && window.pageYOffset < 100 && window.innerWidth > 850) {
        this.scrolled = true;
        window.scroll({
            top: findPos(document.getElementById("about")),
            left: 0,
            behavior: 'smooth'
        })
    }
    this.oldScroll = this.scrollY;
}

//Background parallax effect
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