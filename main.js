let addToDoButton = document.getElementById('addToDo'); //include 'addToDo' to allow access to the button created in index.html
let toDoContainer = document.getElementById('toDoContainer');   //include the 'toDoContainer' do that we can add items to it
let inputField = document.getElementById('inputField'); //include 'inputField' so that we can take stuff from the textbox

addToDoButton.addEventListener('click', function(){ //on click of the button
    var paragraph = document.createElement('p');    //create a paragraph element
    paragraph.classList.add('paragraph-styling')    //with the style of paragraph-styling
    paragraph.innerText = inputField.value; //and insert the text value from the input field
    toDoContainer.appendChild(paragraph);   //append the paragraph to the toDoContainer div as a child
    inputField.value = "";  //clears text box when clicked
    paragraph.addEventListener("click", function() {    //on a single click of the paragraph inside the toDoContainer div, change the style to a line-through
        paragraph.style.textDecoration = "line-through" 
    })
    paragraph.addEventListener("dblclick", function() { //on double click, remove the child from the toDoContainer div
        toDoContainer.removeChild(paragraph);
    })
})