const number1 = parseInt(process.argv[2]);
const number2 = parseInt(process.argv[3]);
const add = number1 + number2;
if (add) {
  console.log('Output is: ', add);
} else {
  console.log('Please enter two numbers');
}
