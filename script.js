// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global scope variable
let globalMessage = "I am a global variable. I can be accessed anywhere!";

// Function to demonstrate local vs global scope
function checkScope() {
    // Local scope variable
    let localMessage = "I am a local variable. I can only be accessed inside this function.";
    
    // Accessing local variable (works)
    console.log("Inside the function: " + localMessage);

    // Accessing global variable (works)
    console.log("Inside the function: " + globalMessage);

    // This variable is returned to be used outside the function
    return localMessage;
}

// Call the function and get the returned value
let scopeResult = checkScope();

// Try to access the local variable from the global scope (will fail)
// console.log("Outside the function: " + localMessage); // This would cause a ReferenceError

// Display the result on the page
document.getElementById("scopeResult").textContent = "The function returned: '" + scopeResult + "' but 'localMessage' is not accessible here.";

// Function with parameters and a return value
function calculateArea(length, width) {
    // Parameters are used in the calculation
    let area = length * width;
    
    // Return the calculated value
    return area;
}

let areaOfRoom = calculateArea(10, 5);
console.log("The area of the room is: " + areaOfRoom);

// Part 3: Combining CSS Animations with JavaScript

// Get the elements from the DOM
const triggerButton = document.getElementById('triggerButton');
const animatedBox = document.getElementById('animatedBox');

// A reusable function to trigger the CSS animation
function toggleBoxAnimation() {
    // Use classList.toggle() to add or remove the 'animate' class
    // This is an elegant way to trigger the CSS transition/animation
    animatedBox.classList.toggle('animate');
}

// Add an event listener to the button to call the function
triggerButton.addEventListener('click', toggleBoxAnimation);

// Function to calculate and display a message (demonstrating reusability)
function generateResultMessage(operation, a, b) {
    let result;
    if (operation === 'add') {
        result = a + b;
    } else if (operation === 'subtract') {
        result = a - b;
    } else {
        return "Invalid operation";
    }
    return `The result of the ${operation} is: ${result}`;
}

console.log(generateResultMessage('add', 15, 7)); // The result of the add is: 22
console.log(generateResultMessage('subtract', 15, 7)); // The result of the subtract is: 8