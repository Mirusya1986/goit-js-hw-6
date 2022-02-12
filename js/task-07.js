const inputEl = document.querySelector('#font-size-control');
const textResult = document.querySelector('#text');

textResult.style.fontSize=`${inputEl.value}px`;


const onChahge = (e) => 
    textResult.style.fontSize=`${e.currentTarget.value}px`;

    inputEl.addEventListener('input', onChahge);
