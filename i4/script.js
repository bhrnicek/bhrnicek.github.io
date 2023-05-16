// Matrix rain effect

const canvas = document.getElementById("matrix-canvas");
const context = canvas.getContext("2d");

// Set canvas dimensions to match the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = "BH";
const matrixChars = matrix.split("");

const fontSize = 15;
const columns = canvas.width / fontSize;

const matrixDrops = [];
for (let i = 0; i < columns; i++) {
  matrixDrops[i] = 1;
}

function drawMatrix() {
  // Set canvas background
  context.fillStyle = "rgba(0, 0, 0, 0.1)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Set matrix characters color and font
  context.fillStyle = "#00FF00";
  context.font = `${fontSize}px Courier New`;

  // Loop through each column
  for (let i = 0; i < matrixDrops.length; i++) {
    const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
    context.fillText(char, i * fontSize, matrixDrops[i] * fontSize);

    if (matrixDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      matrixDrops[i] = 0;
    }

    matrixDrops[i]++;
  }
}

function animate() {
  drawMatrix();
  requestAnimationFrame(animate);
}

animate();
