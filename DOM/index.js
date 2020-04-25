// System 1
/* 
const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const result = document.querySelector('#result');

submit.addEventListener('click', () => {
  let inputVal = input.value;
  const li = document.createElement('li');
  li.innerHTML = inputVal;

  result.appendChild(li);

  input.value = '';
});
 */

// System 2
const input = document.querySelector('#input');
const list = document.querySelector('#result');
const taskList = [];

// ["Hello", "Hi", "Bye"]
function task(element) {
  list.innerHTML = '';

  element.forEach((e) => {
    let li = document.createElement('li');
    li.innerHTML = e;
    list.appendChild(li);
  });
}

input.addEventListener('keyup', (e) => {
  if (e.which === 13 && input.value !== '') {
    taskList.push(input.value);
    input.value = '';
    task(taskList);
  }
});
