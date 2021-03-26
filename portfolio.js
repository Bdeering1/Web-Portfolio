const aboutBlocks = document.querySelector('[data-about-blocks]');
const aboutBlockTemplate = document.querySelector('[data-about-block-template]');
const projectGrid = document.querySelector('[data-project-grid]');
const projectTemplate = document.querySelector('[data-project-template]');

/* About Section Data */
const about = [
    {
        header: 'Core Skills',
        type: 'two-col',
        content: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'SASS'],
        tags: []
    },
    {
        header: 'Bio',
        type: 'abstract',
        content: [
            `Hey I'm Bryn! A passionate web developer who loves front end projects
            especially those involving React. I am currently working a few personal
            projects to improve my proficiency with front end technologies, and I'm
            aspiring to work in full stack.`
        ],
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

/* Project Section Data */
const projects = [
    {
        link: 'https://bdeering1.github.io/Visual-Sorting-App',
        image: 'images/Visual Sorting.png',
        title: 'Visual Sorting App',
        desc: 'sorting algorithm learning tool',
        tech: 'React & Redux',
        feat: [
            'Fully responsive and cross browser compatible',
            'Modular and scalable design'
        ]
    },
    {
        link: 'https://bdeering1.github.io/To-Do-List/',
        image: 'images/To Do List.png',
        title: 'To Do List',
        desc: 'personal organization tool',
        tech: 'Javascript & SASS',
        feat: [
            'Event listeners, DOM manipulation, and browser storage',
            'CSS custom properties, pseudo elements, layouts'
        ]
    },
    {
        link: 'https://codepen.io/bdeering1/full/QWKxemq',
        image: 'images/Calculator.png',
        title: 'Calculator',
        desc: 'virtual calculator app',
        tech: 'React & SASS',
        feat: [
            'Responsize design',
            'Component functions and state manipulation'
        ]
    }
]

window.onload = () => {
    //https://stackoverflow.com/questions/4210798/how-to-scroll-to-top-of-page-with-javascript-jquery
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0,0);
    /* Sending about section info to DOM */
    about.forEach((block, idx) => {
        const template = document.importNode(aboutBlockTemplate.content, true);
        const aboutBlock = template.querySelector('.about-block');
        aboutBlock.id = 'block-' + idx;
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
    /* Sending projects section info to DOM */
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

/* Initial Scroll to Projects Area */
window.onscroll = handleScroll();

function handleScroll() {
    let lastScroll;
    this.oldScroll = 99;
    this.scrollLock = false;
    return async function() {
        if (this.oldScroll <= this.scrollY) {
            if (this.scrollLock) { //prevent overscroll
                document.body.style.overflowY = 'hidden';
                clearTimeout(lastScroll);
                console.log('relock');
                lastScroll = setTimeout(function() {
                    document.body.style.overflowY = '';
                    this.scrollLock = false;
                    console.log('unlock');
                }, 500);
            } else {
                autoScroll();
            }
        }
        this.oldScroll = this.scrollY;
    };
}

function autoScroll() {
    if (window.pageYOffset < 300 && !this.firstScroll) {
        window.scroll({
            top: findPos(document.getElementById('about')),
            left: 0,
            behavior: 'smooth'
        })
        this.firstScroll = true;
        console.log('lock');
        this.scrollLock = true;
    }
    else if ((window.pageYOffset + window.innerHeight >= findPos(document.getElementById('projects'))
        || (window.innerWidth > 1250 && window.pageYOffset >= window.innerHeight * 1.1))
        && this.firstScroll
        && !this.secondScroll) {
        this.secondScroll = true;
        window.scroll({
            top: findPos(document.getElementById('projects')),
            left: 0,
            behavior: 'smooth'
        })
        console.log('lock');
        this.scrollLock = true;
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