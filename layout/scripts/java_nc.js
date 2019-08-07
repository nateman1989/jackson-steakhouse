var listItems = document.querySelectorAll('ul.javaprice');
if (listItems.length > 0) {
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].className = 'newjava';
    }
}
var list = document.getElementsByClassName('cooking')[0];

var newItemLast = document.createElement('h5');
var newTextLast = document.createTextNode('#So Easy!');

newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

var newItemFirst = document.createElement('h3');
var newTextFirst = document.createTextNode('How to Get Gift Cards');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);
