// Arithmetic functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// Event listeners for buttons
document.getElementById("add").addEventListener("click", function () {
  const a = parseFloat(document.getElementById("number1").value) || 0;
  const b = parseFloat(document.getElementById("number2").value) || 0;
  const result = add(a, b);
  document.getElementById("calculation-result").textContent = result;
});

document.getElementById("subtract").addEventListener("click", function () {
  const a = parseFloat(document.getElementById("number1").value) || 0;
  const b = parseFloat(document.getElementById("number2").value) || 0;
  const result = subtract(a, b);
  document.getElementById("calculation-result").textContent = result;
});

document.getElementById("multiply").addEventListener("click", function () {
  const a = parseFloat(document.getElementById("number1").value) || 0;
  const b = parseFloat(document.getElementById("number2").value) || 0;
  const result = multiply(a, b);
  document.getElementById("calculation-result").textContent = result;
});

document.getElementById("divide").addEventListener("click", function () {
  const a = parseFloat(document.getElementById("number1").value) || 0;
  const b = parseFloat(document.getElementById("number2").value) || 0;
  const result = divide(a, b);
  document.getElementById("calculation-result").textContent = result;
});
