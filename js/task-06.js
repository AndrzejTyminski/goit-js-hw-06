const inputText = document.querySelector("input");
const valid = document.querySelector("style");
const invalid = document.querySelector("style");

console.log(valid);

const inputLength = inputText.getAttribute("data-length");
console.log(inputLength);

inputText.addEventListener("blur", (e) => {
  let temp = e.currentTarget.value.length;
  console.log("wpisane znaki", temp);
  console.log("limit znakow", inputLength);

  // const type =
  //   temp > inputLength
  //     ? inputText.classList.add("invalid");
  //     : inputText.classList.add("valid");
});
