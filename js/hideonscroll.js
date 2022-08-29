/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let navBar = document.querySelector('nav')
let prevScrollPos = window.pageYOffset
window.addEventListener('scroll', () => {
  let currentScrollPos = window.pageYOffset
  prevScrollPos > currentScrollPos ? navBar.style.top = '0' : navBar.style.top = '-64px'
  prevScrollPos = currentScrollPos
})