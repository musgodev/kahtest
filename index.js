window.addEventListener('scroll', onScroll)

function onScroll() {
    showBackToTopButton()
}

function openMenu() {
    let body = document.querySelector("body")
    body.classList.add("menu-expanded")
    // backToTop.classList.remove("show")
}

function closeMenu() {
    let body = document.querySelector("body")
    body.classList.remove("menu-expanded")
}

function showBackToTopButton() {

    let backToTop = document.getElementById("backToTop")
        
    if(scrollY > 700) {
        backToTop.classList.add("show")
    } 
    else {
        backToTop.classList.remove("show")
    }
}

// && window.innerWidth >= 1024