
// button
const menuResponsiveBtn = document.querySelector('.menuResponsiveBtn');
// elements
const menuCircle = document.querySelector('.menuCircle');
const responsiveLogo = document.querySelector('.responsiveLogo');
const menu = document.querySelector('.menu');
const whiteLogo = document.querySelector('.whiteLogo');
const blackLogo = document.querySelector('.blackLogo');



// Responsive menu button work

menuResponsiveBtn.addEventListener('click', () => {
    menuResponsiveBtn.classList.toggle('open')
    menuCircle.classList.toggle('open')
    responsiveLogo.classList.toggle('open')
    menu.classList.toggle('open')
    whiteLogo.classList.toggle('open')
    blackLogo.classList.toggle('open')

});




