function parallax() {
    if (window.innerHeight <= 1280) {
        let s = document.getElementById("img-container");
        var yPos = -window.pageYOffset / 30;
        s.style.top = yPos + "%";
    }
}

window.addEventListener("scroll", parallax);

window.onload = () => {
    projects = document.getElementById("projects");
    scrolled = false;
}

window.onscroll = function(e) {
    if (this.oldScroll <= this.scrollY && scrolled == false) {
        this.scrolled = true;
        window.scroll({
            top: findPos(projects),
            left: 0,
            behavior: 'smooth'
        })
    }
    this.oldScroll = this.scrollY;
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