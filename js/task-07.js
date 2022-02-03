const inputEl = document.querySelector('#font-size-control');
const textResult = document.querySelector('#text');


const onChahge = (e) => 
    textResult.style.fontSize=`${e.currentTarget.value}px`;

    inputEl.addEventListener('input', onChahge);
