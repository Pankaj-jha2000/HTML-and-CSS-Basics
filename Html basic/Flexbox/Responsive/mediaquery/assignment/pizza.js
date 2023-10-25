const pizzaBase = document.getElementById('pizza-base');
const baseOptions = document.querySelectorAll('.base-option');
const ingredientOptions = document.querySelectorAll('.ingredient-option');

let selectedBase = null;

baseOptions.forEach(base => {
  base.addEventListener('click', () => {
    selectedBase = base.textContent;
    pizzaBase.style.backgroundColor = '#f6f6f6'; // Set the base color here
  });
});

ingredientOptions.forEach(ingredient => {
  ingredient.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', ingredient.textContent);
  });
});

pizzaBase.addEventListener('dragover', event => {
  event.preventDefault();
});

pizzaBase.addEventListener('drop', event => {
  event.preventDefault();
  const ingredientName = event.dataTransfer.getData('text/plain');
  if (ingredientName) {
    const ingredientSpan = document.createElement('span');
    ingredientSpan.textContent = ingredientName;
    pizzaBase.appendChild(ingredientSpan);
  }
});
