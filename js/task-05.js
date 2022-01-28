const inputText = document.querySelector('#name-input');
const outputResult = document.querySelector('#name-output');


inputText.addEventListener('input', onTextInput);


function onTextInput (event) {
if (inputText.value.trim() !== '') {
    outputResult.textContent = event.currentTarget.value;
} else{


    outputResult.textContent = "Anonymous";
}
}




