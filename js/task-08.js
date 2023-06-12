const form = document.querySelector(".login-form");
form.addEventListener("submoit", event => {
    event.preventDefault();
    const { elements } = event.
        currentTarget;
    const { email, password } = {
        email: elements.email.value,
        password: elements.password.
            value
    }

    if (!email.lenght || !password.lenght) return alert("Всі поля повинні бути заповненні!");
    consol.log({ email, password })
    event.currentTarget.reset();
})
