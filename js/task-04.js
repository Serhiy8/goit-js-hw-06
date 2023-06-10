let counterValue = 0;
const counterValueRef = document.querySelector("#value");

const onDecrementButtonClick = document.querySelector(
  "[data-action=decrement]"
);
const onIncrementButtonClick = document.querySelector(
  "[data-action=increment]"
);

const decrement = () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
};

onDecrementButtonClick.addEventListener("click", decrement);
onIncrementButtonClick.addEventListener("click", increment);
