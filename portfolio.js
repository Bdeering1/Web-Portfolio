function parallax() {
    if (window.innerHeight <= 1280) {
        let s = document.getElementById("img-container");
        var yPos = -window.pageYOffset / 20;
        s.style.top = yPos + "%";
    }
}

window.addEventListener("scroll", function () {
    parallax();
});