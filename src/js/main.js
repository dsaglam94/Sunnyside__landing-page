
// Menu toggle and hamburger 
const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.nav');


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navBar.classList.toggle('nav-open');
})

// close the menu when clicked
let navLinks = document.querySelectorAll('.nav__items--link');

Array.from(navLinks).forEach(link => link.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navBar.classList.toggle('nav-open');
}))


// make the arrow disappear from DOM when scroll down
function arrowDisappear() {
    let arrow = document.querySelector('.header__arrow');
    let arrowPosition = arrow.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 7;

    if (arrowPosition < screenPosition) {
        arrow.classList.add('arrow-disappear')
    }

}

window.addEventListener('scroll', arrowDisappear);