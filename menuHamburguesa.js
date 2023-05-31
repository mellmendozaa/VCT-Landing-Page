const menuHamburguesa = document.querySelector('.menuHamburguesa');
const menuHamburguesaIcono = menuHamburguesa.querySelector('span');
const menuMobil = document.querySelector('.menuMobil');

menuHamburguesa.addEventListener('click', () => {
    menuHamburguesaIcono.innerText = menuHamburguesaIcono.innerText === 'menu'
        ? 'close'
        : 'menu';
    
    menuMobil.classList.toggle('is-open');
})