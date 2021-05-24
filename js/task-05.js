
const elements = {
    inputEl: document.querySelector('#name-input'),
    labelEl: document.querySelector('#name-output'),
};


const onInputEl = (event) => {

    elements.labelEl.textContent = elements.inputEl.value.trim() === ""
        ? "незнакомец"
        : event.currentTarget.value;
    
}

elements.inputEl.addEventListener('input', onInputEl);


