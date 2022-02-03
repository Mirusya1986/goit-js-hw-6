const inputEl = document.querySelector ('input');
const lengthInput = inputEl.dataset.length;


console.dir(lengthInput)

const lengthValidation = Number.parseInt(lengthInput);


inputEl.addEventListener ('blur',onInputElBlur);

function onInputElBlur (e){
if (e.currentTarget.value.trim().length===lengthValidation){
    e.currentTarget.classList.remove('invalid');
    e.currentTarget.classList.add('valid')}else{

        e.currentTarget.classList.remove('valid');
    e.currentTarget.classList.add('invalid')
    }
}
