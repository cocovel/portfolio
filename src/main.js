// Apply dark styling, header-dark, when scrolling down the page
const header = document.querySelector('.header');
const headerHeigh = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeigh) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }

})
