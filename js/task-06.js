const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    const inputLength = +inputEl.getAttribute("data-length");
    const inputCurrent = event.currentTarget;
    const inputValueLength = inputCurrent.value.length;

    if (inputValueLength < inputLength || inputValueLength > inputLength) {
        inputCurrent.classList.remove("valid");
        return inputCurrent.classList.add("invalid");
    }
    if (inputValueLength === inputLength) {
        inputCurrent.classList.remove("invalid");
        return inputCurrent.classList.add("valid");
    }
}
