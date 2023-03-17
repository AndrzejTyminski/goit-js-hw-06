function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor());

const bodyEl = document.querySelector("body");

const btnEl = document.querySelector("button");

const change = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  console.log(getRandomHexColor());
};
btnEl.addEventListener("click", change);
