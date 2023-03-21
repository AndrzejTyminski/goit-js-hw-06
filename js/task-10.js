function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("#boxes");

const firstdiv = document.createElement("div");
divBox.append(firstdiv);
firstdiv.style.width = "30px";
firstdiv.style.height = "30px";
firstdiv.style.backgroundColor = getRandomHexColor();

const getInputValue = () => {
  let inputVal = document.querySelector("input").value;

  for (let i = 0; i < inputVal; i++) {
    const divEl = document.createElement("div");
    divBox.append(divEl);
    divEl.setAttribute(
      "style",
      "width: " +
        (40 + i * 10) +
        "px;" +
        " height: " +
        (40 + i * 10) +
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
  }
};

createBtn.addEventListener("click", getInputValue);
destroyBtn.addEventListener("click", removeAct);
