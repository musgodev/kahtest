function openMenu() {
    let body = document.querySelector("body")
    body.classList.add("menu-expanded")
    // backToTop.classList.remove("show")
}

function closeMenu() {
    let body = document.querySelector("body")
    body.classList.remove("menu-expanded")
}