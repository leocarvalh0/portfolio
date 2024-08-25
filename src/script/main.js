const toggle = document.querySelector('.header__nav__menu-toggle');
const nav = document.querySelector('.header__nav__items');
const toggleItem = document.querySelectorAll('.header__nav__menu-toggle__item');

toggle.addEventListener('click', function() {
    if (nav.style.display !== 'flex') {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }

    for (let i=0; i<3; i++) {
        if (toggleItem[i].classList.value === 'header__nav__menu-toggle__item') {
            toggleItem[i].classList.value = 'header__nav__menu-toggle__itemX'
        } else {
            toggleItem[i].classList.value = 'header__nav__menu-toggle__item'
        }
    }

})