var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');

function showPosition(Event) {
    sx.nodeValue = Event.screenX;
    sy.nodeValue = Event.screenY;
    px.nodeValue = Event.pageX;
    py.nodeValue = Event.pageY;
    cx.nodeValue = Event.clientX;
    cy.nodeValue = Event.clientY;
}

var el = document.getElementById('body');
el.addEventListener('mousemove', showPosition, false);