// Hamburger Menu Code
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}



// Theme Switching Code
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
	document.documentElement.setAttribute('color-mode', currentTheme);
	if(currentTheme === 'dark') {
		toggleSwitch.checked = true;
	}
}

function switchTheme(e) {
	if(e.target.checked) {
		document.documentElement.setAttribute('color-mode', 'dark');
		localStorage.setItem('theme', 'dark');
	} else {
		document.documentElement.setAttribute('color-mode', 'light');
		localStorage.setItem('theme', 'light');
	}
}
toggleSwitch.addEventListener('change', switchTheme, false);


// Skillbars Code
var skills;
var windowHeight;
function init() {
    skills = document.querySelectorAll('.toanimate');
    windowHeight = window.innerHeight;
}
function checkPosition() {
    for (var i = 0; i < skills.length; i++) {
        var element = skills[i];
        var positionFromTop = skills[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('animated');
            element.classList.remove('toanimate');
        }
    }
}
window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);
init();
checkPosition();


// Scroll event listener, reveal and active section code
let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
section.forEach((i) => {
  let top = window.scrollY;
  let offset = i.offsetTop - 150;
  let height = i.offsetHeight;
  let id = i.getAttribute("id");

  if (top >= offset && top < offset + height) {
  menu.forEach((link) => {
    link.classList.remove("active");
    document
    .querySelector("header nav a[href*=" + id + "]")
    .classList.add("active");
  });
  }
});
};

function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
  var windowHeight = window.innerHeight;
  var elementTop = reveals[i].getBoundingClientRect().top;
  var elementVisible = 150;

  if (elementTop < windowHeight - elementVisible) {
  reveals[i].classList.add("active");
  } else {
  reveals[i].classList.remove("active");
  }
}
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();


// Hide navbar on scroll
// When the user scrolls down 20px from the top of the document, slide down the navbar
var lastScrollTop;
navbar = document.getElementById('navbar');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-64px';
}
else{
navbar.style.top='0';
}
lastScrollTop = scrollTop;
});