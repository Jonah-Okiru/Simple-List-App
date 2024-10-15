// create the variables of addButton, List container and input text
const addButton = document.getElementById('add-button');
const ListContainer = document.getElementById('list-container');
const inputText = document.getElementById('input-text');
// add event listener
addButton.addEventListener('click', additem)
// The function
function additem(){
    // get the input value
    const inputValue =inputText.value;
    // check if the input value is empty
    if(inputValue !== ''){
        newList = document.createElement('li');
        // setting the text content of the new list item to be inputvalue
        newList.textContent = inputValue;
        // append the new list item to the list container
        ListContainer.appendChild(newList);
        // clear the input field
        inputText.values = "";
    }
}

