function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let color = getRandomHexColor();
console.log(color);

const createBtn = document.querySelector("button[data-create]");
const divBox = document.querySelector("#boxes");
divBox.style.width = "30px";
divBox.style.height = "30px";
divBox.style.backgroundColor = "red";

const getInputValue = () => {
  let inputVal = document.querySelector("input").value;
  console.log("podana wartosc input", inputVal);
  for (let i = 0; i < inputVal; i++) {
    console.log(i);
    const divEl = document.createElement("div");
    divBox.append(divEl);

    //divEl.setAttribute("style", "height:" + i * 10 + "px");
    divEl.setAttribute(
      "style",
      "width: " +
        i * 10 +
        "px;" +
        " height: " +
        i * 10 +
        "px;" +
        " background-color: red;" +
        " margin: " +
        5 +
        "px"
    );
    //divEl.style.backgroundColor = "blue";
  }
};

createBtn.addEventListener("click", getInputValue);

