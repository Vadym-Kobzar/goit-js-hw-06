const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientEl = {
    ingredientsList: document.querySelector("#ingredients"),
};
const newIngredientList = ingredients.map(nameIngredients => {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.textContent = nameIngredients;
    return listItem;
});

ingredientEl.ingredientsList.append(...newIngredientList);
