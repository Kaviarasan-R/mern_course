// Event Listeners

/* In the head of the HTML file, the script element contains a "defer" attribute. This specifies that the script is downloaded and executed after the page has finished parsing. */

// Insure the DOM is available to interact with.
const view = document.querySelector("#view2");
console.log(view);

const div = view.querySelector("div");
const h2 = view.querySelector("h2");

// Syntax: addEventListener (event, function, useCapture)

const doSomething = () => {
  alert("doing something");
};

// Using a function name in the event listener
h2.addEventListener("click", doSomething, false);

// Removing a function with a name: removeEventListener()
h2.removeEventListener("click", doSomething, false);

// Using an anonymous function in the event listener
h2.addEventListener("click", (event) => {
  console.log(event.target);
  event.target.textContent = "Clicked";
});

// Listening for the readystatechange event
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = view.querySelector("h2");

  view.addEventListener("click", (event) => {
    view.style.backgroundColor = "purple";
  });

  div.addEventListener("click", (event) => {
    div.style.backgroundColor = "blue";
  });

  h2.addEventListener("click", (event) => {
    event.target.textContent = "Clicked";
  });
};

// classList, add, remove, and toggle
view.addEventListener("click", (event) => {
  view.classList.add("purple");
  view.classList.remove("darkblue");
  view.classList.toggle("darkblue");
});

// Prevent default behavior with event.preventDefault()
const initApp2 = () => {
  const view3 = document.querySelector("#view3");
  const myForm = document.querySelector("#myForm");
  const textInput = document.querySelector("#myTextInput");

  myForm.addEventListener("submit", (event) => {
    event.preventDefault(); // stops the form from refreshing the page

    const inputValue = textInput.value;
    console.log("Input Value:", inputValue);

    const formData = new FormData(myForm);
    const data = Object.fromEntries(formData);
    console.log("Form Data as Object:", data);

    const p = document.createElement("p");
    p.textContent = `You entered: ${inputValue}`;
    view3.appendChild(p);

    textInput.value = "";
  });
};

initApp2();

// EVENT BUBBLING/CAPTURING
const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Event bubbling (bottom -> top)
child.addEventListener("click", () => {
  console.log("Child clicked!");
});

parent.addEventListener("click", () => {
  console.log("Parent clicked!");
});

grandparent.addEventListener("click", () => {
  console.log("Grandparent clicked!");
});

// Event capturing (top -> bottom)
grandparent.addEventListener(
  "click",
  () => {
    console.log("Grandparent CAPTURING");
  },
  { capture: true }
);

parent.addEventListener(
  "click",
  () => {
    console.log("Parent CAPTURING");
  },
  true
); // Short form: just pass true

child.addEventListener(
  "click",
  () => {
    console.log("Child CAPTURING");
  },
  { capture: true }
);

// MOUSE EVENTS
/**
 * click - Triggered when element is clicked
 * dblclick - Triggered on double click
 * mousedown - Mouse button is pressed down
 * mouseup - Mouse button is released
 * mouseenter - Mouse enters element (doesn't bubble)
 * mouseleave - Mouse leaves element (doesn't bubble)
 * mouseover - Mouse enters element or its children (bubbles)
 * mouseout - Mouse leaves element or its children (bubbles)
 * mousemove - Mouse moves over element
 * contextmenu - Right-click context menu
 */

// KEYBOARD EVENTS
/**
 * keydown - Key is pressed down
 * keyup - Key is released
 * keypress - Key is pressed (deprecated, use keydown instead)
 */

// FORM EVENTS
/**
 * submit - Form is submitted
 * input - Input value changes (fires immediately)
 * change - Input value changes and loses focus
 * focus - Element receives focus
 * blur - Element loses focus
 * reset - Form is reset
 * select - Text is selected in input/textarea
 */

// WINDOW/DOCUMENT EVENTS
/**
 * DOMContentLoaded - DOM is fully loaded (without images/stylesheets)
 * load - Page and all resources are fully loaded
 * beforeunload - Before page is unloaded
 * unload - Page is being unloaded
 * resize - Window is resized
 * scroll - Element or window is scrolled
 */

// DRAG AND DROP EVENTS
/**
 * dragstart - Drag operation starts
 * drag - Element is being dragged
 * dragend - Drag operation ends
 * dragenter - Dragged element enters drop target
 * dragover - Dragged element is over drop target
 * dragleave - Dragged element leaves drop target
 * drop - Element is dropped
 */

// CLIPBOARD EVENTS
/**
 * copy - Content is copied
 * cut - Content is cut
 * paste - Content is pasted
 */

// MEDIA EVENTS (Audio/Video)
/**
 * play - Media starts playing
 * pause - Media is paused
 * ended - Media playback ended
 * volumechange - Volume changed
 * timeupdate - Current playback position changed
 * loadeddata - Media data is loaded
 * canplay - Media can start playing
 * canplaythrough - Media can play without buffering
 * seeking - Seeking starts
 * seeked - Seeking completes
 */

// TOUCH EVENTS (Mobile)
/**
 * touchstart - Touch point is placed on screen
 * touchmove - Touch point moves across screen
 * touchend - Touch point is removed from screen
 * touchcancel - Touch is interrupted
 */

// ANIMATION EVENTS
/**
 * animationstart - CSS animation starts
 * animationend - CSS animation ends
 * animationiteration - CSS animation repeats
 */

// TRANSITION EVENTS
/**
 * transitionend - CSS transition completes
 * transitionstart - CSS transition starts
 * transitionrun - CSS transition begins running
 * transitioncancel - CSS transition is cancelled
 */

// OTHER USEFUL EVENTS
/**
 * error - Error occurs (image, script, etc.)
 * online - Browser goes online
 * offline - Browser goes offline
 * visibilitychange - Page visibility changes (tab switching)
 * wheel - Mouse wheel is scrolled
 * hashchange - URL hash changes
 * popstate - Browser history changes
 * storage - localStorage/sessionStorage changes
 * beforeprint - Before printing
 * afterprint - After printing
 */

// EVENT LISTENER OPTIONS
/**
 * once - Event listener fires only once, then removes itself
 * passive - Indicates listener won't call preventDefault()
 * capture - Use capture phase instead of bubble phase
 * signal - AbortSignal to remove listener programmatically
 */
