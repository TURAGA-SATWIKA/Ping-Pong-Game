const container = document.querySelector('.container');
const paddle1 = document.querySelector('.paddle1');
const paddle2 = document.querySelector('.paddle2');
const ball = document.querySelector('.ball');
const player1Score = document.querySelector('#player1Score');
const player2Score = document.querySelector('#player2Score');

let ballX = 290;
let ballY = 190;
let ballSpeedX = 5;
let ballSpeedY = 5;
let paddle1Y = 160;
let paddle2Y = 160;
let player1ScoreCount = 0;
let player2ScoreCount = 0;

function movePaddle1(event) {
	if (event.keyCode === 87 && paddle1Y >= 10) {
		paddle1Y -= 10;
	}
	if (event.keyCode === 83 && paddle1Y <= 310) {
		paddle1Y += 10;
	}
	paddle1.style.top = paddle1Y + 'px';
}

function movePaddle2(event) {
	if (event.keyCode === 38 && paddle2Y >= 10) {
		paddle2Y -= 10;
	}
	if (event.keyCode === 40 && paddle2Y <= 310) {
		paddle2Y += 10;
	}
	paddle2.style.top = paddle2Y + 'px';
}

document.addEventListener('keydown', movePaddle1);
document.addEventListener('keydown', movePaddle2);


document.addEventListener('keydown', movePaddle1);
document.addEventListener('keydown', movePaddle2);

function moveBall() {
	ballX += ballSpeedX;
	ballY += ballSpeedY;
	if (ballX >= 590 || ballX <= 10) {
		ballSpeedX = -ballSpeedX;
	}
	if (ballY >= 380 || ballY <= 10) {
		ballSpeedY = -ballSpeedY;
	}
	if (ballX <= 30 && ballY >= paddle1Y && ballY <= paddle1Y + 80) {
		ballSpeedX = -ballSpeedX;
	}
	if (ballX >= 570 && ballY >= paddle2Y && ballY <= paddle2Y + 80) {
		ballSpeedX = -ballSpeedX;
	}
	if (ballX <= 10) {
		player2ScoreCount++;
		player2Score.textContent = player2ScoreCount;
		reset();
	}
	if (ballX >= 590) {
		player1ScoreCount++;
		player1Score.textContent = player1ScoreCount;
		reset();
	}
	ball.style.top = ballY + 'px';
	ball.style.left = ballX + 'px';
}

function reset() {
	ballX = 290;
	ballY = 190;
	paddle1Y = 160;
	paddle2Y = 160;
	ballSpeedX = -ballSpeedX;
	ball.style.top = ballY + 'px';
	ball.style.left = ballX + 'px';
	paddle1.style.top = paddle1Y + 'px';
	paddle2.style.top = paddle2Y + 'px';
}

setInterval(moveBall, 50);
