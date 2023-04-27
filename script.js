// DOM Manipulation 

// GetElementById()

const title = document.getElementById('main-heading');
console.log(title);



// GetElementByClassName()

const listItems = document.getElementsByClassName('list-items');
console.log(listItems); // returns an array like object with all the child elements



// GetElementByTagName()

const listItems1 = document.getElementsByTagName('li');
console.log(listItems1);


// querySelector
// - used to collect 1 item or the first item that matches a selector its given

const container = document.querySelector('div');
console.log(container);

// querySelectorAll
//- used to manipulate more than one div for example 
const container1 = document.querySelectorAll('div');
console.log(container1);