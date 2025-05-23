let gameCanvas = document.getElementById('gameCanvas');
let ctx = gameCanvas.getContext('2d');

ctx.fillStyle = '#fff';
ctx.fillRect(0, 0, 300, 300);

ctx.strokeStyle = '#000000';
ctx.strokeRect(0, 0, 300, 300);

let snake = [
  { x: 150, y: 150 },
  { x: 140, y: 150 },
  { x: 130, y: 150 },
  { x: 120, y: 150 },
  { x: 110, y: 150 }
];

let foodX, foodY;

let score = 0;

let gameActive = true;

const gameControls = document.getElementById('controls');
const gameScore = document.getElementById('score');

const restartBtn = document.getElementById('btn');
restartBtn.addEventListener('click', () => {
  if (!gameActive) {
    score = 0;
    foodX = 0;
    foodY = 0;
    snake = [
      { x: 150, y: 150 },
      { x: 140, y: 150 },
      { x: 130, y: 150 },
      { x: 120, y: 150 },
      { x: 110, y: 150 }
    ];
    createFood();
    gameControls.style.visibility = 'hidden';
    gameScore.innerHTML = `Score: ${score}`;
    gameActive = true;
    main();
  }
});

function drawSnakePart(snakePart) {
  ctx.fillStyle = '#90EE90';
  ctx.strokeStyle = '#006400';
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function changeDirection(event) {
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

  const keyPressed = event.keyCode;
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

  if (keyPressed === LEFT_KEY && !goingRight) {
    dx = -10;
    dy = 0;
  }

  if (keyPressed === UP_KEY && !goingDown) {
    dx = 0;
    dy = -10;
  }

  if (keyPressed === RIGHT_KEY && !goingLeft) {
    dx = 10;
    dy = 0;
  }

  if (keyPressed === DOWN_KEY && !goingUp) {
    dx = 0;
    dy = 10;
  }
}

function drawSnake() {
  snake.forEach(drawSnakePart);
}

function advanceSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);
  const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
  if (didEatFood) {
    score += 10;
    gameScore.innerHTML = `Score: ${score}`;
    createFood();
  } else {
    snake.pop();
  }
}

function clearCanvas() {
  ctx.fillStyle = '#fff';
  ctx.strokeStyle = '#000000';
  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

function main() {
  if (didGameEnd()) {
    gameControls.style.visibility = 'visible';
    gameActive = false;
    return;
  }
  setTimeout(function onTick() {
    clearCanvas();
    drawFood();
    advanceSnake();
    drawSnake();
    main();
  }, 100);
}

let dx = 10;
let dy = 0;

document.addEventListener('keydown', changeDirection);

function randomTen(min, max) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

function createFood() {
  foodX = randomTen(0, gameCanvas.width - 10);
  foodY = randomTen(0, gameCanvas.height - 10);
  snake.forEach(function isFoodOnSnake(part) {
    const foodIsOnSnake = part.x === foodX && part.y === foodY;
    if (foodIsOnSnake) {
      createFood();
    }
  });
}

function drawFood() {
  ctx.fillStyle = '#FF0000';
  ctx.strokestyle = '#8B0000';
  ctx.fillRect(foodX, foodY, 10, 10);
  ctx.strokeRect(foodX, foodY, 10, 10);
}

function didGameEnd() {
  for (let i = 4; i < snake.length; i++) {
    const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
    if (didCollide) {
      gameControls.style.visibility = 'visible';
      return true;
    }
  }
  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > gameCanvas.width - 10;
  const hitTopWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > gameCanvas.height - 10;
  return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
}

createFood();
main();
