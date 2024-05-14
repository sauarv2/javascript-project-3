const boxContainer = document.getElementById("boxes");
const button = document.getElementById("btn");

btn.addEventListener("click", () => {
  boxContainer.classList.toggle("big");
});
// This line adds a click event listener to the button (btn). When the button is clicked, it toggles the class "big" on the boxContainer. This class presumably changes the size of the container, making it appear bigger or smaller.

function createBox() {
  for (let i = 0; i < 4; i++) {
    // This loop iterates over rows.
    for (let j = 0; j < 4; j++) {
      // This loop iterates over columns within each row.

      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px  ${-i * 125}px`; //This sets the background position of each box element to create a grid effect. The negative values multiplied by 125 are used to position the background image of each box appropriately.
      boxContainer.appendChild(box);
    }
  }
}

createBox();
