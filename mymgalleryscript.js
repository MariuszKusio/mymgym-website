document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.image');

    function revealElements() {
        animatedElements.forEach((div, index) => {
            setTimeout(() => {
                div.classList.remove('hidden');
            }, index * 200);

        });
    }
    
    revealElements();
});
