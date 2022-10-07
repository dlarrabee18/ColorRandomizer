let red = 0,
  green = 0,
  blue = 0,
  max = 256;

let RGB = "rgb(" + red + ", " + green + ", " + blue + ")";

function newRGB() {
  red = Math.floor(Math.random() * max);
  blue = Math.floor(Math.random() * max);
  green = Math.floor(Math.random() * max);
  RGB = "rgb(" + red + ", " + green + ", " + blue + ")";
  document.getElementById("rgb").innerText = RGB;
  changeBGcolor();
}

function changeBGcolor() {
  document.getElementById("bg-color").style.backgroundColor = RGB;
}
