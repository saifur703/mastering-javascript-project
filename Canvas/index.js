let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let drawing = false;
let oldX = 0;
let oldY = 0;
context.strokeStyle = '#ff0000';
canvas.addEventListener('mousedown', (e) => {
  drawing = true;
  oldX = e.offsetX;
  oldY = e.offsetY;
});
canvas.addEventListener('mouseup', (e) => {
  drawing = false;
});
canvas.addEventListener('mousemove', (e) => {
  if (!drawing) return false;

  context.beginPath();
  context.moveTo(oldX, oldY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  oldX = e.offsetX;
  oldY = e.offsetY;
  console.log('mouse move');
});

/* 
context.beginPath();
context.moveTo(10, 12);
context.lineTo(30, 25);
context.stroke(); 
*/

/* Fill Style */
// context.fillStyle = '#ff00ff';
// context.fillRect(10, 50, 200, 200);

/* Fill Stroke */
// context.strokeStyle = '#ffffff';
// context.strokeRect(30, 70, 160, 160);

// Draw Love Symbol
/* 
function draw() {
  var canvas = document.querySelector('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // Cubic curves example
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
  }
}
draw();
 */
