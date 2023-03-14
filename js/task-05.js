const inp = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inp.addEventListener("input", (e) => {
  output.textContent = e.currentTarget.value;
});
