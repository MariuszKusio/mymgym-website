// buttons
const contactCloseBtn = document.querySelector('.fa-xmark');
let trainerContactBtn = document.querySelectorAll('.trainerContactBtn');
const selectBtn = document.querySelector('button');
// elements
const contactFormBgc = document.querySelector('.contactFormBgc');
const formTitle = document.querySelector('.formTitle');

// form titles text array
var newText = ["MARCIN", "PAWEŁ", "KAROLINA", "NATALIA", "KAROL", "TOMEK"];


// Close form by close button
contactCloseBtn.addEventListener('click', () => {
 contactFormBgc.classList.toggle('open')

});


// Open contact form by buttons
for (let i = 0; i < trainerContactBtn.length; i++) {
    trainerContactBtn[i].addEventListener('click', function () {


        // Contact form title text change 
        var indeks = Array.from(trainerContactBtn).indexOf(this);

        formTitle.innerHTML = newText[indeks];

        contactFormBgc.classList.toggle('open')

    })
}


// on scroll animation appears cards

let card = document.querySelectorAll('.cardWrapper');

window.onscroll = () => {
    card.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 500;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-card');
        }

    })
}

// scroll indicator hide after scroll


 var minimalScrollValue = 10;


 var elementToHide = document.querySelector('.scroll-indicator');

 window.addEventListener('scroll', function() {
     
     var scrollValue = window.scrollY || window.pageYOffset;

     if (scrollValue > minimalScrollValue) {
         elementToHide.classList.add('hidden');
     } 

 });




