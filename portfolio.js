function parallax() {
    if (window.innerHeight <= 1280) {
        let s = document.getElementById("img-container");
        var yPos = -window.pageYOffset / 30;
        s.style.top = yPos + "%";
    }
}

window.addEventListener("scroll", parallax);

/* window.onload = () => {
    var lastScrollTop = window.pageYOffset;
    let home = document.getElementById("home");
    home.addEventListener("wheel", (event) => {
        if (event.wheelDelta < 0 || event.deltaY > 0) {
            document.getElementById("projects").scrollIntoView(true);
        } else {
        }
    }, false);
}; */