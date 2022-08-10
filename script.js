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
jQuery(document).ready(function () {
	jQuery(".skillbar").each(function () {
	  jQuery(this)
		.find(".skillbar-bar")
		.animate(
		  {
			width: jQuery(this).attr("data-percent")
		  },
		  6000
		);
	});
  });

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
// window.onscroll = function() {
// 	scrollFunction()
// };

// function scrollFunction() {
// 	if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
// 		document.getElementById("navbar").style.background = "var(--navbar-primary)";
// 		document.getElementById("navbar").style.boxShadow = "rgb(12 12 12 / 10%) 1px 3px 5px";
// 		document.getElementById("navbar").style.color = "var(--primary-text)";
		
// 	} else {
// 		document.getElementById("navbar").style.background = "rgba(0,0,0,0)";
// 		document.getElementById("navbar").style.boxShadow = "none";
// 		document.getElementById("navbar").style.color = "var(--secondary-text)";
// 	}
// }