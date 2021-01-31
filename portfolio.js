function parallax() {
    let s = document.getElementById("img-container");
    if (window.innerWidth > 1300) {
        var yPos = window.pageYOffset / (window.innerHeight / 38);
    } else if (window.innerWidth > 850) {
        var yPos = window.pageYOffset / (window.innerHeight / 56);
    } else {
        var yPos = window.pageYOffset / (window.innerHeight / 64);
    }
    s.style.top = yPos + "%";
}

window.addEventListener("scroll", function () {
    parallax();
});