function getTarget (e) {
    return e.target;
}

function itemDone(e) {
    // remove item from the list
    var target, elParent, elGrandparent;

    target = getTarget(e);
    elParent = target.parentNode;
    elGrandparent = elParent.parentNode;
    elGrandparent.removeChild(elParent);

    // prevent the link from taking you elsewhere
    e.preventDefault(); 
}

// set up event listners to call itemDone on click
var el = document.getElementById('shoppingList');

el.addEventListener('click', function (e) {
    itemDone(e);
}, false);








