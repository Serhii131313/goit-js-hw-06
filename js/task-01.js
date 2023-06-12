const categorisElements = document.querySelector(".categories");
const itamsElements = document.querySelectorAll(".item");
console.log(`Number of categories: ${itamsElements.length}`);

itamsElements.forEach((item) => {
    const titleElements = item.querySelector("h2").textContent;
    const itemCountELements = item.querySelectorAll("li").length;
    console.log(`
Категорія: ${titleElements}`);
    console.log(`Кількість елементів: ${itemCountELements}`);
});