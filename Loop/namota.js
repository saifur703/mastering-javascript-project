// System 1
const num = +process.argv[2];
if (!Number.isInteger(num)) {
  console.log('Please provide any number');
  process.exit();
}
for (let i = 1; i <= 10; i++) {
  console.log(`${num}x${i} = ${num * i}`);
}
