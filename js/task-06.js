const inputRef = document.querySelector("#validation-input[data-length]");
const attributeValue = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", onInputChangeColor);

function onInputChangeColor(event) {
  const inputLength = event.currentTarget.value.length;
  // if (inputLength !== Number(attributeValue)) {
  //   inputRef.classList.add("invalid");
  //   inputRef.classList.remove("valid");
  // } else {
  //   inputRef.classList.remove("invalid");
  //   inputRef.classList.add("valid");
  // }

  inputRef.classList.add("invalid");
  inputRef.classList.remove("valid");
  if (inputLength === Number(attributeValue)) {
    inputRef.classList.replace("invalid", "valid");
  }
}
