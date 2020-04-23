const longText = document.querySelector('#longText');
const shortText = document.querySelector('#shortText');
const submit = document.querySelector('#submit');
const result = document.querySelector('#result');

submit.addEventListener('click', () => {
  const shortTextVal = shortText.value;
  const longTextVal = longText.value;
  const match = longTextVal.toLowerCase().indexOf(shortTextVal.toLowerCase());
  if (match === -1) {
    result.innerHTML = `${shortTextVal} is not matched.`;
  } else {
    result.innerHTML = `<span style="color: red">${shortTextVal}</span> is matched in letter number ${
      match + 1
    }`;
  }
});
