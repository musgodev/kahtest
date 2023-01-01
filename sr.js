const sr = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 2000,
    reset: true
});

ScrollReveal().reveal('.main__content', { delay: 100 });
ScrollReveal().reveal('.card', { delay: 100 });
ScrollReveal().reveal('.locate__content', { delay: 100, origin: 'top', });