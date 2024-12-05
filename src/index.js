import "./styles.css";
const square = document.querySelector("div");
//facon moderne d'ecouter les evenements avec la méthode addEventListener
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  square.dispatchEvent(new Event("mouseover"));
});
function becomered() {
  square.style.backgroundColor = "rgb(255, 0, 0)";
}
square.addEventListener("mouseover", becomered);

square.addEventListener("mouseout", () => {
  square.style.backgroundColor = "rgb(139, 139, 139)";
  square.removeEventListener("mouseover", becomered);
});

// square.addEventListener("mouseover", () => {
//   square.style.width = "300px";
//   square.style.height = "300px";
// });

// square.addEventListener("mouseout", () => {
//   square.style.width = "200px";
//   square.style.height = "200px";
// });
console.log(window);

// square.onmouseover = () => {
//   square.style.backgroundColor = "rgb(255, 0, 0)";
//   console.log("hover");
// };
//
// square.onmouseover = null;
//
// square.onmouseout = () => {
//   square.style.backgroundColor = "rgb(139, 139, 139)";
//   console.log("out");
// };
// document.addEventListener("click", function (e) {
//   console.log(e.target);
// });
