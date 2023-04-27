// EVENT LISTENERS 

// - we can create events in the html directly (see html button 1)

// element.addEventListener("click", function); (this is the syntax for event listener method)

// CLICK EVENT
const buttonTwo = document.querySelector('.btn-2');
function alertBtn(){
    alert('I also love JavaScript');
};

buttonTwo.addEventListener('click',alertBtn);


// MOUSEOVER EVENT
const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'blue';
};

newBackgroundColor.addEventListener("mouseover",changeBgColor);