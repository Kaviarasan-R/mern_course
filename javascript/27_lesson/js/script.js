// ===============================
// DEBOUNCING
// Debouncing is a technique to limit how often a function is executed, usually for events that fire rapidly (like scroll, resize, or input).
// ===============================

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId); // clear previous timer
    timeoutId = setTimeout(() => {
      func.apply(this, args); // call the function after delay
    }, delay);
  };
}

// Function to simulate API call
function searchQuery(event) {
  const query = event.target.value;
  document.getElementById("result").textContent = `Searching for: ${query}`;
  console.log("API call for:", query);
}

// Attach debounced function to input
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", debounce(searchQuery, 500)); // 500ms delay
searchInput.addEventListener("input", _.debounce(searchQuery, 2000)); // 2s delay

// ===============================
// THROTTLING
// Throttling ensures a function is called at most once every X milliseconds, no matter how many times the event fires.
// ===============================

const posts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Post #${i + 1}`,
  body: `This is the body of post #${i + 1}`,
}));

const postsContainer = document.getElementById("postsContainer");
let visibleCount = 0;
const CHUNK = 10; // number of posts to render per scroll

// Function to render posts
function renderPosts() {
  const nextPosts = posts.slice(visibleCount, visibleCount + CHUNK);
  nextPosts.forEach((post) => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
    postsContainer.appendChild(div);
  });
  visibleCount += CHUNK;
}

// Initial render
renderPosts();

// Throttled scroll handler
function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    // near bottom
    renderPosts();
    console.log("Loaded more posts...");
  }
}

function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Attach throttled function to scroll
window.addEventListener("scroll", throttle(handleScroll, 1000)); // max once every 1 second
// window.addEventListener("scroll", _.throttle(handleScroll, 1000)); // max once every 1 second
