const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus =  document.querySelector('button[data-action="increment"]');
const span = document.querySelector('span');

let counterValue = 0;


btnPlus.addEventListener ('click', onBtnPlus);
btnMinus.addEventListener('click', onBtnMinus);


function onBtnPlus () {
    counterValue +=1;
    span.innerHTML = counterValue;
}


function onBtnMinus () {
    counterValue-=1;
    span.innerHTML = counterValue;
}