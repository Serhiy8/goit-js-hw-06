// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const quantityOfItems = document.querySelectorAll("li.item");
console.log(`Number of categories: ${quantityOfItems.length}`);

quantityOfItems.forEach((element) => {
  const titleRef = element.firstElementChild;
  const elQuantityRef = element.querySelectorAll("li");
  console.log(`Category: ${titleRef.textContent}`);
  console.log(`Elements: ${elQuantityRef.length}`);
});
