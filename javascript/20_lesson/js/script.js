// SELECTING ELEMENTS

// By ID
const view1 = document.getElementById("view1");

// querySelector - returns first match (use CSS selectors)
const view2 = document.querySelector("#view2");

// By class name - returns HTMLCollection (live collection)
const views = document.getElementsByClassName("view");

// querySelectorAll - returns NodeList (static collection)
const sameViews = document.querySelectorAll(".view");

// Query within an element
const divs = view1.querySelectorAll("div");

const sameDivs = view1.getElementsByTagName("div");

// Advanced selectors
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");

// STYLING ELEMENTS

// Change display
// view1.style.display = "none";
// view2.style.display = "flex";

// Style multiple elements
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
  evenDivs[i].style.width = "200px";
  evenDivs[i].style.height = "200px";
}

// Better way: using forEach (NodeList has forEach)
evenDivs.forEach((div) => {
  div.style.backgroundColor = "darkblue";
  div.style.width = "200px";
  div.style.height = "200px";
});

// CHANGING TEXT CONTENT

const navText = document.querySelector("nav h1");

// textContent - plain text only
navText.textContent = "Hey World!";

// innerHTML - can include HTML tags
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hey!</h1> <p>This should align right.</p>`;

// innerText - similar to textContent but respects CSS styling
// navText.innerText = "Visible text only";

// CREATING AND INJECTING ELEMENTS

// Method 1: createElement + appendChild
const newDiv = document.createElement("div");
newDiv.textContent = "New Div 13";
newDiv.style.backgroundColor = "red";
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.display = "flex";
newDiv.style.justifyContent = "center";
newDiv.style.alignItems = "center";

view1.appendChild(newDiv); // Add to end

// Method 2: insertAdjacentHTML (more flexible)
view1.insertAdjacentHTML(
  "beforeend",
  `
  <div style="background-color: green; width: 200px; height: 200px; display: flex; justify-content: center; align-items: center;">
    New Div 14
  </div>
`
);

// insertAdjacentHTML positions:
// 'beforebegin' - before the element
// 'afterbegin' - first child of element
// 'beforeend' - last child of element
// 'afterend' - after the element

// Method 3: Create element with class
const customDiv = document.createElement("div");
customDiv.classList.add("custom-box");
customDiv.textContent = "Custom Div";
customDiv.style.cssText = `
  background-color: purple;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`;

view1.insertBefore(customDiv, view1.firstChild); // Insert at beginning

// ATTRIBUTES - GET, SET, REMOVE

// Get attribute
const view1Id = view1.getAttribute("id");
console.log("View1 ID:", view1Id);

// Set attribute
view1.setAttribute("data-custom", "my-data");
view1.setAttribute("data-index", "1");

// Set multiple data attributes
view1.dataset.user = "John";
view1.dataset.role = "admin";

// Get data attribute
console.log("Data custom:", view1.getAttribute("data-custom"));
console.log("Data user:", view1.dataset.user);

// Remove attribute
// view1.removeAttribute("data-custom");

// Has attribute (check if exists)
console.log("Has ID?", view1.hasAttribute("id")); // true

// CLASS MANIPULATION

// Add class
view1.classList.add("active");
view1.classList.add("highlight", "featured"); // Add multiple

// Remove class
// view1.classList.remove("view1");

// Toggle class (add if doesn't exist, remove if exists)
view1.classList.toggle("dark-mode");

// Check if has class
console.log("Has 'view' class?", view1.classList.contains("view")); // true

// Replace class
// view1.classList.replace("view", "container");

// DOCUMENT LOAD EVENTS

// DOMContentLoaded - fires when DOM is ready (before images load)
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready!");

  // Add attribute when page loads
  view1.setAttribute("data-loaded", "true");
  view1.dataset.timestamp = Date.now();

  // Add loading class
  view1.classList.add("loaded");

  console.log("View1 attributes after load:", {
    id: view1.id,
    dataLoaded: view1.dataset.loaded,
    timestamp: view1.dataset.timestamp,
  });
});

// window.onload - fires when everything (including images) loads
window.addEventListener("load", () => {
  console.log("Page fully loaded!");
});

// REMOVING ELEMENTS

// Remove specific element
// const firstDiv = view1.querySelector("div");
// firstDiv.remove();

// Remove child from parent
// const lastDiv = view1.lastElementChild;
// view1.removeChild(lastDiv);

// Remove all children
// view1.innerHTML = "";

// TRAVERSING THE DOM

const secondDiv = view1.children[1]; // Get 2nd child
console.log("Second div:", secondDiv);

// Parent
console.log("Parent:", secondDiv.parentElement);

// Siblings
console.log("Next sibling:", secondDiv.nextElementSibling);
console.log("Previous sibling:", secondDiv.previousElementSibling);

// First and last child
console.log("First child:", view1.firstElementChild);
console.log("Last child:", view1.lastElementChild);

// All children
console.log("All children:", view1.children);

// CLONING ELEMENTS

const divToClone = view1.querySelector("div");
const clonedDiv = divToClone.cloneNode(true); // true = deep clone (with children)
clonedDiv.textContent = "Cloned Div";
clonedDiv.style.backgroundColor = "orange";
view1.appendChild(clonedDiv);

// GETTING ELEMENT DIMENSIONS & POSITION

console.log("View1 dimensions:", {
  width: view1.offsetWidth,
  height: view1.offsetHeight,
  top: view1.offsetTop,
  left: view1.offsetLeft,
});

// Get bounding rectangle
const rect = view1.getBoundingClientRect();
console.log("Bounding rect:", rect);

// PRACTICAL EXAMPLE - Dynamic Content Injection

function createCard(title, description, color) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-card-title", title);

  card.style.cssText = `
    background-color: ${color};
    width: 250px;
    height: 150px;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    color: white;
  `;

  card.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
  `;

  return card;
}

// Inject cards on load
document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  const cards = [
    { title: "Card 1", description: "First card", color: "#3498db" },
    { title: "Card 2", description: "Second card", color: "#e74c3c" },
    { title: "Card 3", description: "Third card", color: "#2ecc71" },
  ];

  const inputContainer = document.querySelector(".myInput");
  if (inputContainer) inputContainer.focus();

  const container = document.querySelector("#view2");
  cards.forEach((cardData) => {
    const card = createCard(
      cardData.title,
      cardData.description,
      cardData.color
    );
    container.appendChild(card);
  });
});

// JQuery Example
// Reference: https://www.w3schools.com/jquery/jquery_ref_overview.asp
$(document).ready(function () {
  // Select element and change text
  $("#message").text("Welcome to jQuery!");

  // Event handling: button click
  $("#btnClick").click(function () {
    // Toggle the color
    $("#message").css("color", "red");

    // Append more text
    $("#message").append(" You clicked the button!");
  });

  // Hide the paragraph after 5 seconds
  setTimeout(function () {
    $("#message").fadeOut(1000); // fade out in 1 second
  }, 5000);
});
