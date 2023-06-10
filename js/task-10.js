function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector("input");
const buttonCreateRef = document.querySelector("[data-create]");
const buttonDestroyRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

buttonCreateRef.addEventListener("click", createBoxes);
buttonDestroyRef.addEventListener("click", destroyBoxes);

function createBoxes() {
  const number = inputRef.value;
  const boxesArray = [];
  for (let i = 0; i < number; i += 1) {
    const sizeBox = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${sizeBox}px`;
    box.style.height = `${sizeBox}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = `0 auto`;
    boxesArray.push(box);
  }
  boxesRef.append(...boxesArray);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}
