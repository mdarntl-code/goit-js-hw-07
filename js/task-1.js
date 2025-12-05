const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const titleEl = category.querySelector("h2").textContent;
  const elCount = category.querySelectorAll("ul li").length;

  console.log(`Category: ${titleEl}`);
  console.log(`Elements: ${elCount}`);
});
