var list = document.getElementsByClassName('cooking')[0];

var newItemLast = document.createElement('h4');
var newTextLast = document.createTextNode('It is That Easy!');

newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

var newItemFirst = document.createElement('h3');
var newTextFirst = document.createTextNode('Gift Cards');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);
