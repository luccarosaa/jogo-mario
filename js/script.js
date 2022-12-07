const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const game_over = document.querySelector('.game-over');

const jump = () => {
	mario.classList.add('jump');
	
	setTimeout(() => {
		mario.classList.remove('jump');
	}, 500);
}

const loop = setInterval(() => {
	
	const pipePosition = pipe.offsetLeft;
	const marioPosition = window.getComputedStyle(mario).bottom.replace('px','');
	
	if (pipePosition <= 140 && pipePosition > 0 && marioPosition < 100) {
		
		pipe.style.animation = 'none';
		pipe.style.left = `${pipePosition}px`;
		
		mario.style.animation = 'none';
		mario.style.bottom = `${marioPosition}px`;
		
		mario.src = 'img/mario-over.gif';
		mario.style.width = '110px'
		mario.style.height = '110px'
		
		game_over.style.visibility = 'visible';
		
		clearInterval(loop);
		
		function reload () 
		{
			window.location.reload();
		}
		
		document.addEventListener('keydown', reload);
	}
	
	if (pipePosition >= 140 && pipePosition < 0 && marioPosition > 100) {
		
		document.getElementById('.pontos').innerHTML = Math.floor(Math.random(000) + 1);
	}
},10);

 document.addEventListener('keydown', jump);
