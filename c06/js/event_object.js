
function checkLength (e, minLength) {

    if(!e) {
        e = window.Event;
    }

    var el, elMsg;

    el = e.target;
    elMsg = el.nextSibling;
    
    if(el.value.length<minLength) {
        elMsg.innerHTML = 'username must be ' + minLength + 'characters or more ';
    } else {
        elMsg.innerHTML = '';
    }
}

var elUsername = document.getElementById('username');

elUsername.addEventListener('blur', function(e){
    checkLength(e, 5);
}, false)













