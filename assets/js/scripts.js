var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo');
    if (window.scrollY > 0) {
        logo.classList.add('no-margin');
    } else {
        logo.classList.remove('no-margin');
    }
})
