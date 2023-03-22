function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("#boxes");
const firstdiv = document.createElement("div");

let size = 20;

firstdiv.style.backgroundColor = getRandomHexColor();

const getInputValue = () => {
  let inputVal = document.querySelector("input").value;

  for (let i = 0; i < inputVal; i++) {
    const divEl = document.createElement("div");
    divBox.append(divEl);
    divEl.setAttribute(
      "style",
      "width: " +
        (size = size + 10) +
        "px;" +
        " height: " +
        size +
        "px;" +
        " background-color: " +
        getRandomHexColor()
    );
  }
};

const removeAct = () => {
  const list = document.getElementById("boxes");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
    size = 20;
  }
};

createBtn.addEventListener("click", getInputValue);
destroyBtn.addEventListener("click", removeAct);
