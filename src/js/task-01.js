const liCategories = document.querySelectorAll('li.item');

console.log(`В списке ${liCategories.length} категории`);

const elements = document.querySelectorAll('.item');
elements.forEach(function (element) {
  console.log(`Категория: ${element.firstElementChild.textContent}`);
  console.log(
    `Количество элементов: ${element.lastElementChild.children.length}`,
  );
});