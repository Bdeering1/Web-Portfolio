const aboutBlocks = document.querySelector('[data-about-blocks]');
const aboutBlockTemplate = document.querySelector('[data-about-block-template]');
const projectGrid = document.querySelector('[data-project-grid]');
const projectTemplate = document.querySelector('[data-project-template]');

const about = [
    {
        header: 'Bio',
        type: 'abstract',
        content: [
            `Hey I'm Bryn! A passionate web developer who loves front end projects
            especially those involving React. I am currently working a few personal
            projects in order to improve my proficiency with front end technologies,
            and I'm aspiring to work in full stack.`
        ],
        tags: []
    },
    {
        header: 'Core Skills',
        type: 'two-col',
        content: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'SASS'],
        tags: []
    },
    {
        header:'Certifications',
        type: 'single-col',
        content: [
            'JavaScript Algorithms and Data Structures',
            'Front End Libraries',
            'Responsive Web Design'
        ],
        tags: [
            'FreeCodeCamp',
            'FreeCodeCamp',
            'FreeCodeCamp'
        ]
    },
]

const projects = [
    {
        link: 'https://bdeering1.github.io/Visual-Sorting-App',
        image: 'resources/Visual Sorting.png',
        title: 'Visual Sorting App',
        desc: 'Sorting algorithm learning tool',
        tech: 'React & Redux',
        feat: [
            'fully responsive and cross browser compatible',
            'modular and scalable design'
        ]
    },
    {
        link: 'https://bdeering1.github.io/To-Do-List/',
        image: 'resources/To Do List.png',
        title: 'To Do List',
        desc: 'Personal organization tool',
        tech: 'Javascript & SASS',
        feat: [
            'event listeners, DOM manipulation, and browser storage',
            'css custom properties, pseudo elements, layouts'
        ]
    },
    {
        link: 'https://codepen.io/bdeering1/full/QWKxemq',
        image: 'resources/Calculator.png',
        title: 'Calculator',
        desc: 'Virtual calculator app',
        tech: 'React & SASS',
        feat: [
            'responsize design',
            'component functions and state manipulation'
        ]
    },
    {
        link: 'https://codepen.io/bdeering1/full/OJRZWEy',
        image: 'resources/Drum Machine.png',
        title: 'Drum Machine',
        desc: 'Virtual drum machine',
        tech: 'React & Bootstrap 4',
        feat: [
            'lifecycle methods, ES6 functionality',
            'bootstrap integration'
        ]
    }
]

window.onload = () => {
    about.forEach((block, idx) => {
        const template = document.importNode(aboutBlockTemplate.content, true);
        const aboutBlock = template.querySelector('.about-block');
        aboutBlock.id = idx;
        const header = aboutBlock.querySelector('.block-header');
        header.innerHTML = block.header;
        if (block.type == 'abstract') {
            const content = document.createElement('div');
            content.classList.add('block-content', block.type);
            const abstract = document.createElement('p');
            abstract.innerHTML = block.content[0].replace(/\r?\n|\r/g, '');;
            content.appendChild(abstract);
            aboutBlock.append(content);
        } else {
            const content = document.createElement('ul');
            content.classList.add('block-content', 'col', block.type);
            block.content.forEach((item) => {
                const bullet = document.createElement('li');
                bullet.className = 'bullet-point';
                bullet.innerHTML = item;
                content.appendChild(bullet);
            });
            aboutBlock.append(content);
        }
        aboutBlocks.appendChild(aboutBlock);
    });
    projects.forEach((proj) => {
        const template = document.importNode(projectTemplate.content, true);
        const projectTile = template.querySelector('.project-tile');
        projectTile.href = proj.link;
        const title = projectTile.querySelector('.project-header');
        title.innerHTML = proj.title;
        const desc = projectTile.querySelector('.project-desc i');
        desc.innerHTML = proj.desc;
        const tech = projectTile.querySelector('.project-tech');
        tech.innerHTML = proj.tech;
        const features = projectTile.querySelector('.project-features');
        proj.feat.forEach((item) => {
            const bullet = document.createElement('li');
            bullet.className = 'bullet-point';
            bullet.innerHTML = item;
            features.appendChild(bullet);
        });
        const image = projectTile.querySelector('.project-img');
        image.src = proj.image;
        image.alt = proj.title + ' project image';
        projectGrid.appendChild(projectTile);
    });
}

//Initial Scroll to Projects Area
window.onscroll = function(e) {
    if (this.oldScroll <= this.scrollY && !this.scrolled && window.pageYOffset < 100 && window.innerWidth > 850) {
        this.scrolled = true;
        window.scroll({
            top: findPos(document.getElementById('about')),
            left: 0,
            behavior: 'smooth'
        })
    }
    this.oldScroll = this.scrollY;
}

//Background parallax effect
window.addEventListener('scroll', parallax);

function parallax() {
    if (window.innerHeight <= 1280) {
        let s = document.getElementById('img-container');
        var yPos = -window.pageYOffset / 30;
        s.style.top = yPos + '%';
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