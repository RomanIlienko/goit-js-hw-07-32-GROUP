
const inputEl = document.querySelector('#validation-input');
const currentValue = inputEl.getAttribute('data-length');
console.log(currentValue)


let currentValueLength = parseInt(currentValue, 10);
const onInputBlur = event => {
      
     if (inputEl.value.length ===0 ) {
        
        inputEl.classList.remove('invalid');
        inputEl.classList.remove('valid');
        return
    } 
    
    if (inputEl.value.length === currentValueLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
        return
    } 
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    
      
};
inputEl.addEventListener('blur', onInputBlur);

