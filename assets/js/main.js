// Collapse menu on small viewports
$(document).ready(function () {
  // $(".button-collapse").sideNav();
  // $('.modal').modal();

});

// Bypass splash page on mobile devices
if (screen.width <= 799) {
  location.href = "portfolio.html";
}

// Control Split Screen
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
  var container = $('#toast-container');
   window.location.href = 'portfolio.html';
 
});