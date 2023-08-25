// Apply dark styling, header-dark, when scrolling down the page
const header = document.querySelector('.header');
const headerHeigh = header.offsetHeight;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeigh) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }

})


// When scrolling down the home section, control opacity
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
})