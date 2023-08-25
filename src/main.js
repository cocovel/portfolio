// Apply dark styling - 'header-dark' - when scrolling down the page more than the height of header
const header = document.querySelector('.header');
const headerHeigh = header.offsetHeight;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeigh) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }

})

// When scrolling down the home section, make elements in home section transparent gradually
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
})


// Only show arrow-up button when the home section is scrolled down more than half of its height
const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY / homeHeight < 0.5) {
    arrow.classList.add('arrow-up--unshow');
  } else {
    arrow.classList.remove('arrow-up--unshow');
  }
})

