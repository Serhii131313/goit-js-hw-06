const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
    const inputValue = input.value.trim();
    const expectedLength = parseInt(input.dataset.length);

    if (inputValue.length === expectedLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});