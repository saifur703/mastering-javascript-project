/**
 * Variable Initializations
 */
const number = document.querySelector('#number');
const gramOutput = document.querySelector('#gramOutput');
const kgOutput = document.querySelector('#kgOutput');
const ozOutput = document.querySelector('#ozOutput');
const output = document.querySelector('#output');

/**
 * Default display none output section
 */
output.style.display = 'none';

/**
 * Action
 */
number.addEventListener('input', (e) => {
  let inputValue = e.target.value;

  gramOutput.innerHTML = inputValue / 0.0022046;
  kgOutput.innerHTML = inputValue / 2.2046;
  ozOutput.innerHTML = inputValue * 16;

  /* Output show */
  output.style.display = 'block';
});
