


const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;


const decrement = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

decrementBtnEl.addEventListener('click', decrement);
incrementBtnEl.addEventListener('click', increment);
