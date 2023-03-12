const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const li = document.createElement("li");
  li.textContent = ingredient;
  ul.insertAdjacentElement("afterbegin", li);
}

ul.classList.add("item");
console.log(ul);
