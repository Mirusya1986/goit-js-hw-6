const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.createElement ('ul');
const lis=ingredients.map((ingredient) =>{
  const li = document.createElement ('li');
  li.textContent = ingredient;

return li;
});
ul.append (...lis);

document.body.appendChild(ul);