
// function to remove "move" class for appear image by change top position
function removeClassWithDelay() {

    var element = document.querySelector('.frontImage');
  
    var delay = 500;

    setTimeout(function() {
        element.classList.remove('move');
    }, delay);
}

// start function
window.addEventListener('load', removeClassWithDelay);