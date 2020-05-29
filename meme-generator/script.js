const textInput = document.getElementById('text-input-bottom');
const textInputTop = document.getElementById('text-input-top');
const memeInput = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeTextTop = document.getElementById('meme-text-top');
const memeImage = document.getElementById('meme-image');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');
const memeOne = document.getElementById('meme-1');
const memeTwo = document.getElementById('meme-2');
const memeThree = document.getElementById('meme-3');
const memeFour = document.getElementById('meme-4');

function getText() {
  memeText.innerHTML = textInput.value;
  memeTextTop.innerHTML = textInputTop.value;
}
textInput.addEventListener('keyup', getText);
textInputTop.addEventListener('keyup', getText);

memeInput.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});

function changeBorderF() {
  memeContainer.style.border = '3px dashed red';
}
fireButton.addEventListener('click', changeBorderF);

function changeBorderW() {
  memeContainer.style.border = '5px double blue';
}
waterButton.addEventListener('click', changeBorderW);

function changeBorderE() {
  memeContainer.style.border = '6px groove green';
}
earthButton.addEventListener('click', changeBorderE);

memeOne.addEventListener('click', function () {
  memeImage.src = 'https://s2.glbimg.com/TcgDMMzRbPjtUM3Mm_lqDRCqF8g=/620x620/smart/e.glbimg.com/og/ed/f/original/2019/11/01/lilyandchloeofficial_73295075_454717811833787_7405708810502304129_n.jpg';
});

memeTwo.addEventListener('click', function () {
  memeImage.src = 'data:image/jpeg;base64,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';
});

memeThree.addEventListener('click', function () {
  memeImage.src = 'https://www.memesmonkey.com/images/memesmonkey/s_1f/1f9b1a5f3e83c46add9527cad8ec7b0f.jpeg';
});

memeFour.addEventListener('click', function () {
  memeImage.src = 'https://conteudo.imguol.com.br/c/noticias/ef/2019/11/08/andras-arato-ficou-conhecido-como-hide-pain-harold-por-causa-de-seu-sorriso-nervoso-1573231062755_v2_900x506.jpg';
});
