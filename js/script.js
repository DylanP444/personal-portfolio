/* toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* scroll sections change to corresponding section*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

/* sticky navbar */
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/* remove toggle icon and navbar*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

/* scroll reveal */
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* typed js */
const typed = new Typed('.multiple-text', {
  strings: ['a Computer Scientist', 'an Engineer', 'a Student'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

/* Show more info function */
function showMore() {
    alert("Hi! I'm Dylan Pellegrini, a sophomore majoring in Computer Science " +
       "and Engineering at The Ohio State University. I'm passionate about artificial " + 
       "intelligence, and have experience with several programming languages, including Python, " +
       " Java, C++, C, HTML, CSS, JavaScript, and MATLAB. " +
       "I've also worked with libraries and frameworks such as React, Pandas, Flask, and Bootstrap. " +
       "I'm always looking to grow, collaborate, and apply my skills to meaningful projects. " +
       "Feel free to reach out to me if you have any questions or would like to connect!");
}

