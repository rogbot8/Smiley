window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('smiley');
  const ctx = canvas.getContext('2d');
  const moodSlider = document.getElementById('moodSlider');

  // Mapping moods to arc offsets
  const moodMap = {
    0: { offsetY: 190, flip: true },   // Deep frown
    1: { offsetY: 180, flip: true },   // Frown
    2: { offsetY: 170, flip: false },  // Neutral
    3: { offsetY: 160, flip: false },  // Smile
    4: { offsetY: 150, flip: false }   // Big smile
  };

  function drawFace(moodValue) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Face
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, Math.PI * 2);
    ctx.fillStyle = 'hsl(90, 80%, 60%)';
    ctx.fill();
    ctx.stroke();

    // Eyes
    ctx.beginPath();
    ctx.arc(110, 120, 10, 0, Math.PI * 2);
    ctx.arc(190, 120, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#000';
    ctx.fill();

    // Smile/Frown
    const mood = moodMap[moodValue];
    ctx.beginPath();
    ctx.arc(150, mood.offsetY, 50, 0, Math.PI, mood.flip);
    ctx.stroke();
  }

  // Initial draw
  drawFace(moodSlider.value);

  moodSlider.addEventListener('input', () => {
    drawFace(moodSlider.value);
  });
});
