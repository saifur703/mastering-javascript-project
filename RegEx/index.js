const colorInput = document.querySelector('#color');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const result = document.querySelector('.result');

colorInput.addEventListener('keyup', () => {
  red.innerHTML = '';
  const colorVal = colorInput.value;

  // #ff00ff
  let regEx = /#([0-9A-Fa-f]{1,2})([0-9A-Fa-f]{1,2})([0-9A-Fa-f]{1,2})/g;

  if (colorVal.length == 4 || colorVal.length == 7) {
    const output = regEx.exec(colorVal);
    if (output === null) {
      red.innerHTML = 'Not a Valid Color!';
    } else {
      red.innerHTML = `R: ${getColorValue(output[1])}`;
      green.innerHTML = `G: ${getColorValue(output[2])}`;
      blue.innerHTML = `B: ${getColorValue(output[3])}`;

      result.style.height = '200px';
      result.style.width = '150px';
      result.style.background = colorVal;
    }
  } else {
    red.innerHTML = 'Not a Valid Color!';
  }
});

function getColorValue(hex) {
  if (hex.length === 1) {
    hex = hex + hex;
  }
  return parseInt(hex, 16);
}
