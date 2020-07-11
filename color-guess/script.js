const rgbInput = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const restart = document.getElementById('reset-game');
const score = document.getElementById('score');
let erroCount = 0;

function randomRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `(${r}, ${g}, ${b})`;
}

function resetColors() {
  const randomBall = Math.floor(Math.random() * 6);
  Array.from(balls).forEach((ball) => {
    ball.style.backgroundColor = `rgb${randomRGB()}`;
  });
  rgbInput.innerHTML = balls[randomBall].style.backgroundColor;
  answer.innerHTML = 'Escolha a cor correspondente ao RGB';
}

function gameAnswer(event) {
  const chosenColor = event.target;
  if (chosenColor.style.backgroundColor === rgbInput.innerHTML) {
    answer.innerHTML = 'Parabéns, você acertou!';
    erroCount = 0;
    score.innerHTML = parseFloat(score.innerHTML) + 3;
    setTimeout((() => {
      resetColors();
    }), 900);
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
    erroCount += 1;
    looserScore(erroCount);
  }
}

function looserScore(num) {
  if (erroCount > 3) {
    score.innerHTML = parseFloat(score.innerHTML) - 1;
    return erroCount = 0;
  }
}

/* Event Listeners */
Array.from(balls).forEach((ball) => ball.addEventListener('click', gameAnswer));
restart.addEventListener('click', () => {
  score.innerHTML = 0;
  erroCount = 0;
  resetColors();
});

/* On Load Actions */
window.onload = alert('Regras do jogo: clique na bolinha com a cor RGB correta. Caso acerte, as cores irão atualizar e você pode continuar testando suas habilidades! Atenção, cada ACERTO você GANHARÁ 3 pontos. Em caso de 4 ERROS consecutivos, você PERDERÁ 1 ponto. Caso queira zerar o placar, restart the game! BOA SORTE!');
window.onload = resetColors();
window.onload = function () {
  score.innerHTML = 0;
};
