// 1.

const noc = document.querySelectorAll("h2");
console.log("Number od categories:", noc.length);

// 2.

//const categories = document.querySelectorAll("h2");

for (let i = 0; i <= noc.length; i++) {
  const listit = noc[i].textContent;
  console.log("Category:", listit);

  const temp = document.querySelectorAll("h2 + ul");
  console.log("Elements:", temp[i].children.length);
}
