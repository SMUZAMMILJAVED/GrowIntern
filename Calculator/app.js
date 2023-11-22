const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
const operators = ["+", "-", "/", "*", "%", "="];
let result = "";
const answer = (value) => {
  if (value === "=" && result !== "") {
    result = eval(result.replace("%", "/100"));
  } else if (value === "AC") {
    result = "";
  } else if (value === "DEL") {
    result = result.toString().slice(0, -1);
  } else {
    if (result === "" && operators.includes(value)) return;
    result += value;
  }
  screen.value = result;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => answer(e.target.dataset.value));
});
