const containerEL = document.getElementById("container");

const color = ["#e74c3c", "#8e44ad", "3498db", "#e67e22", "2ecc71"];

const squres = 1000;

for (let i = 0; i < squres; i++) {
  const squre = document.createElement("div");

  squre.classList.add("squre");
  squre.addEventListener("mouseover", () => setcolor(squre));
  squre.addEventListener("mouseout", () => removecolor(squre));
  containerEL.appendChild(squre);
}

function setcolor(col) {
  const randomColor = randomcolor();
  col.style.background = randomColor;
  col.style.boxShadow = `0 0 2px ${randomColor},0 0 10px ${randomColor}`;
}

function removecolor(col) {
  col.style.background = `#1d1d1d`;

  col.style.boxShadow = `0 0 2px #000`;
}

function randomcolor() {
  const diffcolor = color[Math.floor(Math.random() * color.length)];

  return diffcolor;
}
