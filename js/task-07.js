const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");



textEl.style.fontSize = inputEl.value + "px";

inputEl.addEventListener("input", (e) => {
  console.log(e.currentTarget.value);
  textEl.style.fontSize = e.currentTarget.value + "px";
});
