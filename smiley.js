const canvas = document.getElementById('smiley');
const ctx = canvas.getContext('2d');
const slider = document.getElementById('hueSlider');

function drawFace(hue) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Face
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, Math.PI * 2);
  ctx.fillStyle = `hsl(${hue}, 80%, 60%)`;
  ctx.fill();
  ctx.stroke();

  // Eyes
  ctx.beginPath();
  ctx.arc(110, 120, 10, 0, Math.PI * 2);
  ctx.arc(190, 120, 10, 0, Math.PI * 2);
  ctx.fillStyle = '#000';
  ctx.fill();

  // Smile
  ctx.beginPath();
  ctx.arc(150, 160, 50, 0, Math.PI);
  ctx.stroke();
}

// Initial draw
drawFace(slider.value);

// Live update when slider moves
slider.addEventListener('input', () => {
  drawFace(slider.value);
});
const canvas = document.getElementById('smiley');
const ctx = canvas.getContext('2d');

// Face
ctx.beginPath();
ctx.arc(150, 150, 100, 0, Math.PI * 2); // x, y, radius
ctx.fillStyle = '#39FF14'; // a nice neon green

ctx.fill();
ctx.stroke();

// Eyes
ctx.beginPath();
ctx.arc(110, 120, 10, 0, Math.PI * 2);
ctx.arc(190, 120, 10, 0, Math.PI * 2);
ctx.fillStyle = '#000';
ctx.fill();

// Smile
ctx.beginPath();
ctx.arc(150, 160, 50, 0, Math.PI); // Half-circle smile
ctx.stroke();
