function parallax() {
    var s = document.getElementById("img-container");
    var yPos = window.pageYOffset / 29;
    s.style.top = yPos + "%";
}

window.addEventListener("scroll", function () {
    parallax();
});