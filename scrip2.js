// TRAVERSE THE DOM 

// PARENT NODE TRAVERSAL 

// let ul = document.querySelector('ul');
// console.log(ul.parentNode);
// console.log(ul.parentElement);

// // To find grandparent:
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);


// const html = document.documentElement;
// console.log(html);
// console.log(html.parentNode);
// console.log(html.parentElement); // will return null, bc its job is to try and retrieve the parent element of the html element(ie the document node), however the document node and element node arent the same type of node 


// CHILD NODE TRAVERSAL
// let ul = document.querySelector('ul');
// console.log(ul);
// console.log(ul.childNodes); // indentations are counted as text nodes
// console.log(ul.firstChild); // cant style these bc its indentation
// console.log(ul.lastChild); 
// // To style first node:
// ul.childNodes[1].style.backgroundColor = 'blue';

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);


// SIBLING NODE TRAVERSAL 

// - <H1> and <UL> are siblings to eachother bc theyre on the same level
let ul = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.ChildNodes);

console.log(ul);
console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);




