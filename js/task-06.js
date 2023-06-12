const inputElements = document.querySelector("#validation-input");
inputElements.addEventListener("blur", onBlurBordColor);
function onBlurBordColor(event) {
    const inputDataLength = Number(inputElements.dataset.lenght);
    const inputValueLength = Number(inputElements.value.trim().lenght);

    if (inputDataLength === inputValueLength) {
        inputElements.classList.add("valid");
        inputElements.classList.remove("invalid");
    } else {
        inputElements.classList.remove("valid");
        inputElements.classList.add("invalid");
    }
}