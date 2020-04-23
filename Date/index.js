const result = document.querySelector('#result');

function setTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const output = `${hour}: ${minute}: ${second}`;
  result.innerHTML = output;
}
setInterval(setTime, 1000);
