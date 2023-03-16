const inputText = document.querySelector("#validation-input");
const valid = document.querySelector("#validation-input");
const invalid = document.querySelector("#validation-input");

//console.log(valid);

const inputLength = inputText.getAttribute("data-length");
console.log("punkt graniczny", inputLength);

inputText.addEventListener("blur", (e) => {
  let temp = e.currentTarget.value.length;
  console.log("wpisane znaki", temp);
  //console.log("limit znakow", inputLength);

  if (temp > inputLength) {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
});
