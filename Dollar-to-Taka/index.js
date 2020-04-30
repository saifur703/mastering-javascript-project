/**
 * Variable Initializations
 *
 */
const dollarRate = document.querySelector('#dollarRate');
const dollarAmount = document.querySelector('#dollarAmount');
const output = document.querySelector('#output');
const result = document.querySelector('#result');
const resultBlock = document.querySelector('#resultBlock');

/**
 * Output Display Init
 */
output.style.display = 'none';
resultBlock.style.display = 'none';

/**
 * 1st Action
 */
dollarRate.addEventListener('input', (e) => {
  let dollarRateValue = e.target.value;
  if (!Number(dollarRateValue)) {
    alert('Sorry! your input is not supported. Please try again.');
    e.target.value = '';
  }
  if (Number(dollarRateValue)) {
    // Display output
    output.style.display = 'block';
    resultBlock.style.display = 'none';
  }
  /**
   * 2nd Action
   */
  dollarAmount.addEventListener('input', (e) => {
    let dollarAmountValue = e.target.value;

    let total = dollarRateValue * dollarAmountValue;

    /**
     * Output Show
     */
    resultBlock.style.display = 'block';
    result.innerHTML = total;
  });
});
