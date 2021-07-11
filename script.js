//Burger click 
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('click');
  burger.classList.toggle('click');
});

//Nav Link
const navLink = document.querySelectorAll('.nav-link');

function linkActive() {
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.remove('click');
}
navLink.forEach(n => n.addEventListener('click', linkActive));



//Scroll Reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});
//welcome reveal
sr.reveal('.text h1', {});
sr.reveal('.text p', {delay: 200});
sr.reveal('.people', {delay: 400});
//projects reveal
sr.reveal('.project-tile', {interval: 200});

sr.reveal('.lorem', {interval: 200});

sr.reveal('.contact-cont a', {interval: 200, delay: 200});


