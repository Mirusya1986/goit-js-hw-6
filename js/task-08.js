
const submitForm = document.querySelector(`.login-form`);

console.dir(submitForm);

submitForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e){
    e.preventDefault();

    const submitFormElements = e.currentTarget.elements;
    const mail = submitFormElements.email.value;
    const password = submitFormElements.password.value;


    if (mail ===''|| password===''){
        return alert (`Attention! All fields must be filled!`)

    }


    const formData = {
        mail,
        password,

    };

    console.log(formData);
    submitForm.reset();
}