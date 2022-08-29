/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// let navBar = document.querySelector('nav')
// let prevScrollPos = window.pageYOffset
// window.addEventListener('scroll', () => {
//   let currentScrollPos = window.pageYOffset
//   prevScrollPos > currentScrollPos ? navBar.style.top = '0' : navBar.style.top = '-64px'
//   prevScrollPos = currentScrollPos
// })

// Enable hidden nav bar
{
  const nav = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });
}