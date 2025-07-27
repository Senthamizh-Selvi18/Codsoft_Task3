const display = document.getElementById("screen");

function append(char) {
  if (display.innerText === "0") display.innerText = "";
  display.innerText += char;
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteChar() {
  let text = display.innerText;
  display.innerText = text.length > 1 ? text.slice(0, -1) : "0";
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace('×', '*').replace('−', '-'));
  } catch (e) {
    display.innerText = "Error";
  }
}
