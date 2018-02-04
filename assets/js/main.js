// Controld
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});

// Display toast instructions; forward to portfolio after 10 seconds
Materialize.toast('Click a "Learn More" Button to View My Portfolio | Forwarding in 15 seconds', 15000, 'rounded',function() {
  window.location.href = 'portfolio.html';
  // Materialize.toast('Welcome to My Portfolio - Please Scroll Down', 10000, 'rounded')
});