function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("#boxes");
divBox.style.width = "30px";
divBox.style.height = "30px";
divBox.style.backgroundColor = getRandomHexColor();

const getInputValue = () => {
  let inputVal = document.querySelector("input").value;
  divBox.insertAdjacentHTML("beforeend", "<br>");

  for (let i = 0; i < inputVal; i++) {
    console.log(i);
    const divEl = document.createElement("div");
    divBox.append(divEl);

    divEl.setAttribute(
      "style",
      "width: " +
        i * 10 +
        "px;" +
        " height: " +
        i * 10 +
        "px;" +
        " background-color: " +
        getRandomHexColor() +
        "; margin: " +
        1 +
        "px"
    );
  }
};

const removeAct = () => {
  divBox.remove();
};

createBtn.addEventListener("click", getInputValue);
destroyBtn.addEventListener("click", removeAct);
