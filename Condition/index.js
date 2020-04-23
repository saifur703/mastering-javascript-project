const ques = document.querySelector('#ques');
const submit = document.querySelector('#submit');
const reply = document.querySelector('#reply');

submit.addEventListener('click', () => {
  const ask = ques.value.toLowerCase();
  let output = '';
  if (ask.match('hi') || ask.match('hello')) {
    output = 'Hello';
  } else if (ask.match('how are you?')) {
    output = 'I am fine. What about you?';
  } else if (ask.match('i am fine') || ask.match("i'm fine ")) {
    output = "That's great :) ";
  } else if (ask.match('who are you?')) {
    output =
      'I am static Robot. I can talk you just for some qustions. I will dynamic soon!';
  } else {
    output = "I can't understand. Try again!";
  }
  reply.innerHTML = output;
});
