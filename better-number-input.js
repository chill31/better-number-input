// selecting all the inputs which are number type and not disabled through attribute.
const allInputs = document.querySelectorAll("input[type=\"number\"]:not([disable-better-number-input])");

// adding event listeners to all inputs
allInputs.forEach((input) => {

  input.addEventListener("keypress", (e) => {

    console.log(e.key);
    const firstDotIndex = e.target.value.indexOf(".");

    const hasOnePeriod = firstDotIndex !== -1 && e.target.value.indexOf(".", firstDotIndex + 1) === -1;

    if (hasOnePeriod && e.key === '.') {

      e.preventDefault();

    } else {

      if (e.key === '.') {

      } else {
        if (/\d/.test(Number(e.key)) === false) {
          e.preventDefault();
        }
      }

    }

  });

  input.addEventListener("paste", (e) => {
    console.log(e.clipboardData.getData("text/plain"));
    if (e.target.value.indexOf(".") !== -1 && e.clipboardData.getData("text/plain").indexOf(".") !== -1) {
      e.preventDefault();
    }

    if (isNaN(e.clipboardData.getData("text/plain"))) {
      e.preventDefault();
    }
  });

});