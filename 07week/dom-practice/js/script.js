'use strict';

window.onload = function() {
// listItemCount()

var newh2 = document.createElement('h2');
newh2.innerHTML = "You have _ items in your shopping cart";

document.getElementsByTagName('h1')[0].appendChild(newh2);


function listItemCount(){
  var list = document.getElementById('shopping-list');
  var message = "There are "+ list.children.length + " items on the page.";
  alert(message);

}

function addListItem() {
    var newItem = document.createElement('li');
    var input = document.getElementById('add item');
    newItem.innerHTML = input.value;
    input.value = '';
    document.getElementById('shopping-list').appendChild(newItem);
}

function removeListItem() {
  var item = document.getElementById('add item');
  document.getElementById('shopping-list').removeChild(list.lastChild);
}

}
