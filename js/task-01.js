// 1.

const noc = document.querySelectorAll("h2");
console.log("Number od categories:", noc.length);

// 2.

const categories = document.querySelectorAll("h2");

for (let i = 0; i <= noc.length; i++) {
  const listit = categories[i].textContent;
  console.log("products:", listit);

  const temp = document.querySelectorAll(".item h2 + ul");
  console.log(temp[i]);
}
