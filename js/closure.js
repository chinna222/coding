function outerFunction() {
  let outerVariable = "I am from the outer scope";

  function innerFunction() {
    console.log(outerVariable); // Accesses outerVariable from the enclosing scope
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: 'I am from the outer scope'

// Data Encapsulation: Closures allow you to create private variables or functions that can't be accessed from outside a function.

function createCounter() {
  let count = 0; // count is private to createCounter and can only be modified using the returned function.
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Here, count is private to createCounter and can only be modified using the returned function.

// Maintaining State: Closures can maintain state between function calls, making them useful for scenarios like event handlers or iterators.

// Callback Functions: Closures are often used in asynchronous programming, such as in setTimeout, event listeners, or AJAX requests.

// Common Problems and Tips with Closures
// Loop Issues: When using var inside a loop, closures can lead to unexpected results due to the lack of block scope in var.
// Using let or creating an IIFE (Immediately Invoked Function Expression) helps avoid this.

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Will log '3' three times because 'i' is shared
  }, 1000);
}

// Using 'let' instead:
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Will log '0', '1', '2'
  }, 1000);
}

// Memory Management Concerns
// Closures can lead to increased memory usage because they keep references to their outer scope, preventing those variables from being garbage collected.
// Be mindful when creating closures in long-running applications to avoid memory leaks.

// Advantages of Closures
// Data privacy: Useful for emulating private methods.
// State persistence: Keeps data that remains between function calls.
// Modular code: Enables a clean way of organizing code and creating modular functions.

// Real-World Examples
// Debouncing
// A function that limits how often a function can be executed.

function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

// How an Event Listener Can Be a Closure:
// A closure is created when a function retains access to its lexical scope, even after the outer function has finished executing.
// An eventListener can be a closure if it references variables from its outer scope.

// Example of an Event Listener as a Closure:

function createButtonHandler(buttonId) {
  let message = `Button ${buttonId} was clicked!`;

  document
    .getElementById(`btn-${buttonId}`)
    .addEventListener("click", function () {
      // This function is a closure because it accesses `message` from the outer scope.
      console.log(message);
    });
}

createButtonHandler(1); // Adds a click event to `btn-1` and closes over the `message` variable.

// The anonymous function defined inside addEventListener forms a closure because it captures and remembers the message variable from its outer function (createButtonHandler).
// Even after createButtonHandler has finished executing, the click event listener still has access to the message variable due to JavaScript's closure behavior.
// Why Event Listeners Can Be Closures:
// Lexical Scope: When an eventListener function is defined, it can access variables from its parent scope due to the way JavaScript handles scope and closures.
// Memory Retention: This retained access allows the event listener to hold references to variables in its outer scope, which can lead to memory concerns if not managed properly (e.g., not removing event listeners when they are no longer needed).
// When Event Listeners Are Closures:
// Anonymous Functions Inside Listeners: When you pass an anonymous function to addEventListener that accesses variables outside its own scope, it becomes a closure.
// Capturing Variables: If the event listener function references any variable from its outer scope (outside of its own function body), it creates a closure.

let counter1 = 0;

document.getElementById("myButton").addEventListener("click", function () {
  counter1++; // Accesses the `counter` variable from the outer scope.
  console.log(`Button clicked ${counter1} times`);
});

// The event listener here is a closure because it "remembers" and modifies counter1 from its parent scope.
// Why This Matters:
// Memory Leaks: Closures, including event listeners, can contribute to memory leaks if they hold references to variables or DOM elements that are no longer needed. For instance, if an element with an attached event listener is removed from the DOM without the listener being removed, the closure may keep the element in memory.
// Performance: Knowing that event listeners can act as closures helps you understand potential performance issues and how to optimize them by removing listeners when appropriate.
// How to Avoid Problems:
// Remove Event Listeners: When an element is removed from the DOM, make sure to remove any associated event listeners to avoid memory leaks.

function handleClick() {
  console.log("Button clicked");
}

// Add event listener
document.getElementById("myButton").addEventListener("click", handleClick);

// Remove event listener when done
document.getElementById("myButton").removeEventListener("click", handleClick);
// Minimize Scope Capturing: Ensure that event listener functions don't capture unnecessary variables or large objects that could stay in memory.
// Conclusion:
// Event listeners are closures when they access variables from their outer scope. This behavior is a result of JavaScript's lexical scoping and closure mechanics.
// While closures are powerful for maintaining state and enabling functions to "remember" their context, be mindful of their memory implications and manage event listeners carefully to avoid potential leaks.
