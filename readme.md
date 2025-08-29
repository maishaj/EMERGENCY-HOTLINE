//What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1. getElementById - Selects a single element by its unique id
2. getElementsByClassName - Selects all elements that have a specific class.
3. querySelector - Selects the first element that matches a CSS selector.
4. querySelectorAll - Selects all elements that match a CSS selector.

//How do you create and insert a new element into the DOM?

1. At first we will create a new element - We will use document.createElement()
   let newDiv = document.createElement("div");
2. Then we will Set innerHTML
   newDiv.innerHTML = `
    <h2>Hello World!</h2>
    <p>This is a new paragraph inside the div.</p>
    <button>Click Me</button>
    `;
3. Then will Append it to the DOM
    let container = document.getElementById("container");
    container.appendChild(newDiv);


//What is Event Bubbling and how does it work?

- Event Bubbling is a type of event propagation in the DOM where when an element is clicked, the event first runs on the target element, then on its parent, then the grandparent, and so on, up to the <html> element, unless it is explicitly stopped.

Suppose we have this HTML:
<div id="parent">
<button id="child">Click Me</button>
</div>

Add event listeners:
document.getElementById("child").addEventListener("click", function() {
    alert("Child clicked!");
});
document.getElementById("parent").addEventListener("click", function() {
    alert("Parent clicked!");
});

First, "Child clicked!" alert appears (event runs on the target element).
Then, the event bubbles up to the parent, so "Parent clicked!" alert appears.
This is event bubbling in action.

//What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique in which you attach a single event listener to a parent element to handle events on its child elements, even if those children are added dynamically after the page loads.

Fewer Event Listeners → improves performance, especially with many child elements.
Dynamic Elements Support → works for elements added later with JavaScript.
Cleaner Code → we don’t need to loop through children and attach individual listeners.


//What is the difference between preventDefault() and stopPropagation() methods?

1.preventDefault() -  Prevents the default browser action associated with an event.
                      Does not stop event propagation.
2.stopPropagation() - Stops the event from bubbling up (or capturing down) the DOM tree.
                      Does not prevent default action.
















