let nav = document.querySelector(".header-nav")
let ham = document.querySelector(".ham")

/* function toggleHamburger() {
    nav.classList.toggle("showHeaderNav")
    ham.classList.toggle("showClose")
}

ham.addEventListener("click", toggleHamburger) */

if (ham) {
    ham.addEventListener("click", () => {
        nav.classList.toggle("showHeaderNav")
        ham.classList.toggle("showClose")
    })
}
