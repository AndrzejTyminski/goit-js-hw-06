const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", (e) => {
  let inputValue = e.currentTarget.value;

  let fontSizeValue = inputValue + "px";
  console.log(fontSizeValue);

  textEl.style.fontSize = fontSizeValue;
});
