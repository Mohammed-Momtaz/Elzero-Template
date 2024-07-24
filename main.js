// open and close mega menu on click
let otherLinks = document.querySelector(".header .main-nav > li:last-child");
let megaMenu = document.querySelector(".mega-menu");
console.log(otherLinks);
console.log(megaMenu);
otherLinks.addEventListener("click", function () {
    if (megaMenu.classList.contains("visible")) {
        megaMenu.classList.remove("visible");
        megaMenu.classList.add("hidden")
    } else {
        megaMenu.classList.remove("hidden");
        megaMenu.classList.add("visible");
    }
});
document.addEventListener("click", function (event) {
    if(!megaMenu.contains(event.target) && !otherLinks.contains(event.target)) {
        megaMenu.classList.remove("visible");
        megaMenu.classList.add("hidden")
    }
});
// open and close mega menu on click
