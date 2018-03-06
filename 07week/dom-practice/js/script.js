'use strict';
//
// document.addEventListener("DOMContentLoaded", function(event) {
//     // You code here
// });
//
//

window.onload = function(){
  alert(setListMessage);



  // var listCountMessage = setListMessage();
  // alert(listCountMessage);
  //
  // createListCountHeaderElement();
  // updateListCountHeaderMessage();
  //
  // createNewItemTextInput();
  //
  // addRemoveButtonstoExistingItems();
}

function setListMessage(){
  let list = document.getElementById("shopping-list");
  return "This page has "+ list.children.length + " items in the shopping cart."
}

function createListCountHeaderElement(message) {
let listHeading= document.createElement("h2");
document.getElementsByTagName("h1")[0].appendChild(listHeading)
listHeading.setAttribute("id", "list-heading");
}


// function listCountMessage() {
//   let listCount = document.getElementById("shopping-list");
//   return list[0].children.length
// }




// var list = document.getElementsByTagName('ol');
// var message = "This page has "+ list[0].children.length + " list items";
// alert(message);
//
// var newh1 = document.createElement('h1');
// newh1.innerHTML = "Manipulating the DOM!";
// document.body.appendChild(newh1);
//
// var div =
// document.getElementById('div');
// var p3 =
// document.getElementById('P3');
// div.removeChild(p3);
//
// var list5 = document.createElement('li');
// list5.innerHTML = "Fifth List Item";
// list[0].appendChild(list5);
//
// document.body.classList.add('colors');
