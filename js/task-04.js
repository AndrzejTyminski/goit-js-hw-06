const dec = document.querySelector('button[data-action="decrement"]');
const add = document.querySelector('button[data-action="increment"]');

const counterValue = document.querySelector("#value");

let i = 0;

const clickListenerDec = () => {
  i -= 1;
  counterValue.textContent = i;
  console.log(i)
};

const clickListenerAdd = () => {
  i += 1;
  counterValue.textContent = i;
  console.log(i)
};

dec.addEventListener("click", clickListenerDec);
add.addEventListener("click", clickListenerAdd);
