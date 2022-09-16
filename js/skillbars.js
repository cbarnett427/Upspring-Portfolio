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