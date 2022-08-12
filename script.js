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


// Skillbar
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