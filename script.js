// Animate the loading dots
let dots = document.getElementById("dots");
let count = 0;

setInterval(() => {
  count = (count + 1) % 4;
  dots.innerText = ".".repeat(count);
}, 500);
