// System 2
/*  ============== */
const num = document.querySelector('#number');
const submit = document.querySelector('#submit');
const result = document.querySelector('#result');

submit.addEventListener('click', () => {
  const numberVal = num.value;

  console.log(numberVal);
  if (!Number(numberVal)) {
    alert('Please provide any number');
    document.querySelector('#number').value = '';
  } else {
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement('li');
      output = `${numberVal} x ${i} = ${numberVal * i}`;
      li.innerHTML = output;
      result.appendChild(li);
    }
    document.querySelector('#number').value = '';
  }
});
