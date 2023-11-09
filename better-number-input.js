// selecting all the inputs which are number type and not disabled through attribute.
const allNormalNumberInputs = document.querySelectorAll("input[type=\"number\"]:not([disable-better-number-input])");

// example options for the "better" number input
const exampleOptionsForBetterNumberInputs = {
  allowNegative: true,
  allowDecimal: true,
  allowScientificNotation: false,
  valueAsNumber: 0,
  resetValues: true
}

allNormalNumberInputs.forEach((input) => {

  input.setAttribute("type", "text");
  input.setAttribute("aria-type", "number");

  if (!input.betterInputOptions || typeof input.betterInputOptions !== "object") {
    input.betterInputOptions = exampleOptionsForBetterNumberInputs;
  }

  if (typeof input.betterInputOptions.allowNegative !== typeof true) {
    input.betterInputOptions.allowNegative = exampleOptionsForBetterNumberInputs.allowNegative;
  }

  if (typeof input.betterInputOptions.allowDecimal !== typeof true) {
    input.betterInputOptions.allowDecimal = exampleOptionsForBetterNumberInputs.allowDecimal;
  }

  if (typeof input.betterInputOptions.allowScientificNotation !== typeof true) {
    input.betterInputOptions.allowScientificNotation = exampleOptionsForBetterNumberInputs.allowScientificNotation;
  }

  if (typeof input.betterInputOptions.resetValues !== typeof true) {
    input.betterInputOptions.resetValues = exampleOptionsForBetterNumberInputs.resetValues;
  }

  if (input.betterInputOptions.resetValues) {
    input.value = "";
  }

  input.addEventListener("keypress", (e) => {
    const firstDotIndex = e.target.value.indexOf(".");

    const hasOnePeriod = firstDotIndex !== -1 && e.target.value.indexOf(".", firstDotIndex + 1) === -1;

    if (hasOnePeriod && e.key === '.') {

      e.preventDefault();

    } else {

      if (e.key === '.') {

        if (input.betterInputOptions.allowDecimal === false) {
          e.preventDefault();
        } else {

          if (e.target.value.indexOf('.') !== -1) {
            e.preventDefault();
          } else {

            if (e.target.value.split("").includes('-') && e.target.value.split("").indexOf('-') !== 0) {
              e.preventDefault();
            } else {

            }

          }

        }

      } else if (e.key === 'e') {

        if (input.betterInputOptions.allowScientificNotation === false) {
          e.preventDefault();
        } else {

          if (e.target.value.indexOf('e') !== -1) {
            e.preventDefault();
          } else {
            if (e.target.value.length === 0) {
              e.preventDefault();
            }
          }

        }

      } else if (e.key === '-') {

        if (input.betterInputOptions.allowNegative === false) {
          e.preventDefault();
        } else {

          if (e.target.value.indexOf('-') !== -1) {
            e.preventDefault();
          } else {
            if (e.target.selectionStart !== 0) {
              e.preventDefault();
            }
          }

        }

      } else {

        if (/\d/.test(Number(e.key)) === false) {
          e.preventDefault();
        }

        if (e.target.value.split("").includes('-') && e.target.value.split("").indexOf('-') === 0) {
          if (e.target.selectionStart === 0) {
            e.preventDefault();
          }
        }

      }

    }

  });

  input.addEventListener("paste", (e) => {
    if (isNaN(e.clipboardData.getData("text/plain"))) {
      e.preventDefault();
    }

    input.betterInputOptions.valueAsNumber = Number(input.value);
  });

  input.addEventListener("input", (e) => {
    if (isNaN(Number(e.target.value))) {
      input.betterInputOptions.valueAsNumber = 0;
    } else {
      input.betterInputOptions.valueAsNumber = Number(e.target.value);
    }
  });

});