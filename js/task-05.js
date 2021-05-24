// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его текущее значение в
// span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'

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


