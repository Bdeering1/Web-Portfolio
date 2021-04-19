const aboutBlocks = document.querySelector('[data-about-blocks]');
const aboutBlockTemplate = document.querySelector('[data-about-block-template]');
const projectGrid = document.querySelector('[data-project-grid]');
const projectTemplate = document.querySelector('[data-project-template]');

let projectNodes = [];
let prevMobileQuery = false;
let prevMediumQuery = false;

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
            'Responsive Web Design',
            'SQL'
        ],
        tags: [
            'FreeCodeCamp',
            'FreeCodeCamp',
            'FreeCodeCamp',
            'SoloLearn'
        ]
    },
]

/* Project Section Data */
const projects = [
    {
        pageLink: 'https://bdeering1.github.io/Visual-Sorting-App',
        sourceLink: 'https://github.com/Bdeering1/Visual-Sorting-App',
        image: 'assets/images/Visual Sorting.png',
        imgSmall: 'assets/images/Visual Sorting Small.png',
        title: 'Visual Sorting App',
        desc: 'algorithm learning tool',
        tech: 'React & Redux',
        feat: [
            'Modular and scalable design',
            'Centralized state management and asynchronous actions'
        ]
    },
    {
        pageLink: 'https://bdeering1.github.io/To-Do-List/',
        sourceLink: 'https://github.com/Bdeering1/To-Do-List',
        image: 'assets/images/To Do List.png',
        title: 'To Do List',
        desc: 'personal organization tool',
        tech: 'Javascript & SASS',
        feat: [
            'Event listeners, DOM manipulation, and browser storage',
            'CSS custom properties, pseudo elements, layouts'
        ]
    },
    {
        pageLink: 'https://bdeering1.github.io/Speed-Typing-App/',
        sourceLink: 'https://github.com/Bdeering1/Speed-Typing-App',
        image: 'assets/images/Speed Typing.png',
        imgSmall: 'assets/images/Speed Typing Small.png',
        title: 'Speed Typing',
        desc: 'typing practice tool',
        tech: 'React & Bootstrap',
        feat: [
            'Bootstrap layouts, components, and custom styles',
            'API consumption'
        ]
    },
    {
        pageLink: 'https://codepen.io/bdeering1/full/QWKxemq',
        sourceLink: 'https://codepen.io/bdeering1/pen/QWKxemq',
        image: 'assets/images/Calculator.png',
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
    /* User always starts from top of page */
    //https://stackoverflow.com/questions/4210798/how-to-scroll-to-top-of-page-with-javascript-jquery
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0,0);

    /* Sending about section info to DOM */
    populateAbout();

    /* Sending projects section info to DOM */
    populateProjects();

    window.addEventListener('resize', updateQuery);
}

function populateAbout() {
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
}

function populateProjects() {
    projects.forEach((proj, idx) => {
        const template = document.importNode(projectTemplate.content, true);
        const projectTile = template.querySelector('.project-tile');
        const text = template.querySelector('.source-link');
        text.href = proj.sourceLink;
        const img = template.querySelector('.page-link');
        img.href = proj.pageLink;
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
        const decor = template.querySelector('.decor');
        const decorWrap = document.createElement('div');
        const decorInner = document.createElement('div');
        decorWrap.className = 'decor-wrap';
        decorInner.className = 'decor-inner';
        decorWrap.appendChild(decorInner);
        decor.appendChild(decorWrap);
        if (idx % 2 == 0) {
            projectTile.classList.add('tile-odd');
            decor.classList.add('decor-odd');
            projectGrid.appendChild(decor);
            projectGrid.appendChild(projectTile);
        } else {
            projectTile.classList.add('tile-even');
            decor.classList.add('decor-even');
            projectGrid.appendChild(projectTile);
            projectGrid.appendChild(decor);
        }
        projectNodes.push(projectTile);
    });
}

function updateQuery() {
    let mobileQuery = window.matchMedia("(max-width: 768px)").matches;
    if (mobileQuery) {
        prevMobileQuery = true;
        projects.forEach((proj, idx) => {
            const text = projectNodes[idx].querySelector('.source-link');
            text.setAttribute('href', proj.pageLink);
        })
    } else if (prevMobileQuery === true) {
        prevMobileQuery = false;
        projects.forEach((proj, idx) => {
            const text = projectNodes[idx].querySelector('.source-link');
            text.setAttribute('href', proj.sourceLink);
        })
    }
    let mediumQuery = window.matchMedia("(max-width: 1200px)").matches;
    if (mediumQuery) {
        prevMediumQuery = true;
        projects.forEach((proj, idx) => {
            if (proj.imgSmall != undefined) {
                const image = projectNodes[idx].querySelector('.project-img');
                image.setAttribute('src', proj.imgSmall);
            }
        })
    } else if (prevMediumQuery === true) {
        prevMediumQuery = false;
        projects.forEach((proj, idx) => {
            if (proj.imgSmall != undefined) {
                const image = projectNodes[idx].querySelector('.project-img');
                image.setAttribute('src', proj.image);
            }
        })
    }
}

/* Autoscroll to about and projects sections */
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
                //console.log('relock');
                lastScroll = setTimeout(function() {
                    document.body.style.overflowY = '';
                    this.scrollLock = false;
                    //console.log('unlock');
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
        //console.log('lock');
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
        //console.log('lock');
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