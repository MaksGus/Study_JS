const score = document.querySelector('.score'),
		start = document.querySelector('.start'),
		gameArea = document.querySelector('.gamearea'),
		car = document.createElement('div');//Формируем элемент див

car.classList.add('car');

start.addEventListener('click', startGame);

document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
	ArrowUp: false,
	ArrowDown: false,
	ArrowRight: false,
	ArrowLeft: false
};

const setting = {
	start: false,
	score: 0,
	speed: 3
};

function startGame() {
	start.classList.add('hide');
	setting.start = true;
	gameArea.appendChild(car);//добавили див к элементу gameArea
	requestAnimationFrame(playGame);//Задает плавную анимацию
}

function startRun(e) {
	e.preventDefault();//отменяет стандартное действие браузера при событии
	console.log(e.key);
	console.log(setting.start);
	keys[e.key] = true;
};

function playGame() {
	console.log('Начало анимации');
	if (setting.start) {
		requestAnimationFrame(playGame);
	}
}

function stopRun(e) {
	keys[e.key] = false;
};


//console.log(gameArea);
//console.log(score);
console.log(start);