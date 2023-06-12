const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(el) {
    em.preventDefault();
    const formElement = e.currentTarget.elements;
    const email = formElement.email.value;
    const password = formElement.password.value;

    if (email === "" || password === "") {
        return alert("Please fill in all the fields!");
    }

    const formData = {
        email,
        password,
    };
    console.log(formData);
    em.currentTarget.reset();
}