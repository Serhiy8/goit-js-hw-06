const inputRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");

inputRef.addEventListener("input", onINputRangeChangeFont);

function onINputRangeChangeFont(event) {
  const fontSize = event.currentTarget.value;
  spanTextRef.style.fontSize = `${fontSize}px`;
}
