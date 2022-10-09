
// GET THE LIST OF LI ELEMENTS
var list = document.getElementsByTagName('ul')[0];

// ADD NEW ELEMENT AT THE END OF THE LIST
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream'); // create a text node as a child to the li element
newItemLast.appendChild(newTextLast); // append the text node as a child to the li node
list.appendChild(newItemLast); // append the li element at the end of the list 

// ADD NEW ELEMENT AT START OF THE LIST
var newItemFirst = document.createElement('li'); // create a new li elelment 
var newTextFirst = document.createTextNode('kale'); // create new text node
newItemFirst.appendChild(newTextFirst); // append text node to the li node
list.insertBefore(newItemFirst, list.firstChild); // insert the created node at start

var listItems = document.querySelectorAll('li'); // all li nodes

// ADD THE CLASS 'COOL' TO ALL THE LI ELEMENTS
var i; // counter variable
for (let i = 0; i < listItems.length; i++) {     // loos through elements
    listItems[i].className = 'cool';             // change class to cool
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2') // h2 element
var headingText = heading.firstChild.nodeValue; // h2 text
var totalItems = listItems.length; // no. of li elements
var newHeading = headingText + '  ' + totalItems;  // content
heading.textContent = newHeading; // update h2













