// Create the HTML for the message

var msg = '<div style = "margin-top: 20px;" class = \"header\"><a id = \"close\" href = "#">close X</a></div>';
msg += '<div><h2>System Maintainance</h2>';
msg += 'Our services are being updated between 3 and 4 a.m. ';
msg += 'During this time, there may be minor disruptions to the service! </div>'

var elNote = document.createElement('div'); // create a new element
elNote.setAttribute('id', 'note');          // set id attribute to node
elNote.innerHTML = msg;                     // add the message
document.body.appendChild(elNote);          // add it to the page

function dismissNote() {
    document.body.removeChild(elNote);      // remove the child
}

var elClose = document.getElementById('close'); // get the close button
elClose.addEventListener('click', dismissNote, false); // click close-clear note




