const screen = document.getElementById("screen");
let screenValue = "";
const keyfield = Array.from(document.querySelectorAll(".num"));
keyfield.forEach(function (a) {
  a.addEventListener("click", function (a) {
    let keyText = a.target.innerText;
    if (keyText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (keyText == "=") {
      screen.value = eval(screen.value);
    } else if (keyText == "DEL") {
      screen.value = screen.value.slice(0, -1);
    } else {
      screen.value += keyText;
    }
  });
});