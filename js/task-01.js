const allCategory = document.querySelectorAll(".item");

console.log(`Number of categories:${allCategory.length}`);

const allItems = allCategory.forEach(item => {
    console.log(`Category :${item.firstElementChild.textContent}`);

    console.log(`Elements :${item.lastElementChild.children.length}`);

    console.log(item.lastElementChild.textContent);
});
