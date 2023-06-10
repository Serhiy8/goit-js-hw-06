function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector("body");
const buttonRef = document.querySelector(".change-color");
const textRef = document.querySelector(".color");

buttonRef.addEventListener("click", onButtonChangeColorBody);

function onButtonChangeColorBody() {
  textRef.textContent = getRandomHexColor();
  return (bodyRef.style.backgroundColor = getRandomHexColor());
}
