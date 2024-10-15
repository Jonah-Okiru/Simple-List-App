# Simple List App 

- This project guides you through implementing the JavaScript code ((AdvancedDOM.js))and css code ((AdvancedDOM.css))  to make the provided HTML code function as a simple list app.

## Objective:

- The app should allow users to add new list items to the unordered list (UL) with the ID list-container.

## Step-by-Step Instructions:

### Event Listener:

- Add an event listener to the button with the ID add-button. This listener will trigger the addItem() function whenever the button is clicked.
### Add Item Function (addItem()):

- Inside the addItem() function:
  - Retrieve the user's input value using the element with the ID input-text.
  - Check if the input value is not empty (to prevent adding blank items).
  - If the input is not empty:
    - Create a new list item element (LI).
    - Set the text content of the new list item to the user's input value.
    - Append the newly created list item to the unordered list container with the ID list-container.
 - Clear the input field (input-text) to prepare for the next item.

### Provided HTML Code:
- The AdvancedDOM.html file contains the basic structure of the app:

## Implementation Steps:

Create a file named AdvancedDOM.js
Implement the JavaScript code to handle adding new list items following the step-by-step instructions provided.
Feel free to add CSS styles(AdvancedDOM.css) to the style section in the index.html file to customize the appearance of your app (optional).