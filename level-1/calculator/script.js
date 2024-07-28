const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";
let previousInput = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.id === "clear") {
      currentInput = "";
      previousInput = "";
      operator = "";
      display.textContent = "0";
    } else if (button.id === "delete") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
    } else if (button.id === "equals") {
      if (currentInput && previousInput && operator) {
        try {
          currentInput = eval(`${previousInput}${operator}${currentInput}`);
          display.textContent = currentInput;
          previousInput = "";
          operator = "";
        } catch (error) {
          display.textContent = "Error";
        }
      }
    } else if (button.classList.contains("operator")) {
      if (currentInput) {
        operator = value === "×" ? "*" : value === "÷" ? "/" : value;
        previousInput = currentInput;
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
