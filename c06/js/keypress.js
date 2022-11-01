function charCount(e) {
    var textEntered = document.getElementById('message').value;
    var charDisplay = document.getElementById('charactersLeft');
    var counter = (255 - (textEntered.length));
    charDisplay.textContent = counter;

    var lastkey = document.getElementById('lastkey');
    lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode;
}

var el = document.getElementById('message');
el.addEventListener('keypress', charCount, false);





