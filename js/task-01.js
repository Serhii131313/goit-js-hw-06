
const itamsElements = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${itamsElements.length}`);

itamsElements.forEach((item) => {
    const titleElements = item.querySelector("h2").textContent;
    const itemCountELements = item.querySelectorAll('ul li').length;

    console.log('\nitem:', titleElements);
    console.log('CountElements', itemCountELements);
});