function parallax() {
    let s = document.getElementById("img-container");
    var yPos = -window.pageYOffset / 20;
    s.style.top = yPos + "%";
}

window.addEventListener("scroll", function () {
    parallax();
});