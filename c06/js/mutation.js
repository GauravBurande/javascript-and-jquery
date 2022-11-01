var elList = document.getElementById('list');
var addLink = document.querySelector('a');
var counter = document.getElementById('counter');

function addItem(e) {
    e.preventDefault();
    var newEl = document.createElement('li');
    var newText = document.createTextNode('New List Item');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount() {
    listItems = document.getElementsByTagName('li').length;
    counter.textContent = listItems;
}

addLink.addEventListener('click', addItem, false);
elList.addEventListener("DOMNodeInserted", updateCount, false);