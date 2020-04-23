const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');
const output1 = document.querySelector('#output1');
const output2 = document.querySelector('#output2');
const finalResult1 = document.querySelector('#finalResult1');

btn1.addEventListener('click', () => {
  const ludu1 = Math.round(Math.random() * 6);
  output1.innerHTML = `<span style="color: #ff0000">Person 1: </span> ${ludu1}`;

  let li = document.createElement('li');
  li.innerHTML = ludu1;
  list1.appendChild(li);
});

btn2.addEventListener('click', () => {
  const ludu2 = Math.round(Math.random() * 6);
  output2.innerHTML = `<span style="color: #ff0000">Person 2: </span> ${ludu2}`;

  let li = document.createElement('li');
  li.innerHTML = ludu2;
  list2.appendChild(li);
  console.log(li);
});
