const inputText = document.querySelector("#validation-input");
const inputLength = inputText.getAttribute("data-length");

inputText.addEventListener("blur", (e) => {
  let temp = e.currentTarget.value.length;

  if (temp >= inputLength) {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
});
