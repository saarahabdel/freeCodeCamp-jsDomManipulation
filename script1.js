// DOM Manipulation 

// 1) STYLING ELEMENTS

// const title = document.querySelector('#main-heading');
// console.log(title);

// title.style.color = 'red'; // in line styling will only works on one element at a time, not on multiple list items

// ----------------------------------------------------

const listItems = document.querySelectorAll('.list-items');

// listItems.style.fontSize = '2rem'; // this will not work 

for( i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '5rem';
}


// 2) CREATING ELEMENTS
const ul = document.querySelector('ul');
const li = document.createElement('li');

// 3) ADDING ELEMENTS
ul.append(li)

// 4) MODIFYING THE TEXT
// const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent); // displayed same way as in HTML file
// console.log(firstListItem.innerHTML); // also shows the HTML tags
// - the three above are displayed differently 

li.innerText = 'X-men';

// 4) MODIFYING ELEMENTS ATTRIBUTES
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));


// 5) MODIFYING ELEMENTS CLASSES
li.classList.add('list-items');
li.classList.remove('list-items');

// find out if the element contains the class list items
console.log(li.classList.contains('list-items')); // returns false bc we removed the class above 

// 6) REMOVE ELEMENTS
li.remove();








