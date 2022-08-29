/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// Hide/Show navbar on scroll
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

