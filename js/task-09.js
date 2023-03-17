function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const btnEl = document.querySelector("button");
const spanEl = document.querySelector(".color");

const change = () => {
  let colorValue = getRandomHexColor();
  bodyEl.style.backgroundColor = colorValue;
  console.log(colorValue);
  spanEl.textContent = colorValue;
};
btnEl.addEventListener("click", change);
