let display = document.getElementById('display');
let current = '0';

function updateDisplay() {
  display.textContent = current;
}

function appendValue(val) {
  if (current === '0' && val !== '.') {
    current = val;
  } else {
    current += val;
  }
  updateDisplay();
}

function clearDisplay() {
  current = '0';
  updateDisplay();
}

function deleteLast() {
  current = current.slice(0, -1);
  if (current === '') current = '0';
  updateDisplay();
}

function calculate() {
  try {
    // Replace % with /100 for simple percentage handling
    let expression = current.replace(/%/g, '/100');
    let result = Function('"use strict"; return (' + expression + ')')();
    current = String(result);
  } catch (e) {
    current = 'Error';
  }
  updateDisplay();
}
