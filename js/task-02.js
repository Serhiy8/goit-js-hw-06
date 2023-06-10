const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainer = document.querySelector("#ingredients");

const makeListOfIngridiets = (options) => {
  return options.map((option) => {
    const listEl = document.createElement("li");
    listEl.classList.add("item");
    listEl.textContent = option;
    return listEl;
  });
};

const elements = makeListOfIngridiets(ingredients);
ingredientsContainer.append(...elements);
