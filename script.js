/*=MENU ICON NAVBAR=*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');  
    navbar.classList.toggle('active');
};

/*=SCROLL SECTION=*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/*=STICKY NAVBAR =*/

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

/*==swiper==*/
var swiper = new Swiper(".mySwiper",{
    slidesPerview: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

/*=remove menu icon navbar when click navbar link(scroll)=*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/*= darkmode =*/

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

/*= scroll reveal =*/
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: top });