
// text typing effect

document.addEventListener('DOMContentLoaded', function () {
    const aboutBannerText = document.getElementById('aboutBannerText');
    const textToType = "Witaj na naszej stronie! Jesteśmy najlepiej wyposażoną siłownią w mieście. Powierzchnia siłowni to aż 1000m2 co daje ogromną przestrzeń na swobodną aktywność fizyczną.";

    function typeText(index) {
        aboutBannerText.textContent = textToType.slice(0, index);
        if (index < textToType.length) {
            setTimeout(function () {
                typeText(index + 1);
            }, 60); 
        }
    }
    
    typeText(0);
});
