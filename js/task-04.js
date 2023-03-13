const dec = document.querySelector('button[data-action="decrement"]');
const add = document.querySelector('button[data-action="increment"]');

const counterValue = document.querySelector("#value");

let i = 0;

const clickListenerDec = () => {
  i -= 1;
  counterValue.textContent = i;
};

const clickListenerAdd = () => {
  i += 1;
  counterValue.textContent = i;
};

dec.addEventListener("click", clickListenerDec);
add.addEventListener("click", clickListenerAdd);
