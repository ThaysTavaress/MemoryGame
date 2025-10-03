const cartas = document.querySelectorAll('.card');
const botaoReiniciar = document.getElementById('reiniciar');

let cartaVirada = false;
let bloquearTabuleiro = false;
let primeiraCarta, segundaCarta;

function virarCarta() {
  if (bloquearTabuleiro) return;
  if (this === primeiraCarta) return;

  this.classList.add('flip');

  if (!cartaVirada) {
    cartaVirada = true;
    primeiraCarta = this;
    return;
  }

  segundaCarta = this;
  verificarPar();
}

function verificarPar() {
  const ehPar = primeiraCarta.getAttribute('data-framework') === segundaCarta.getAttribute('data-framework');

  if (ehPar) {
    console.log("Par Encontrado!");
    desativarCartas();
  } else {
    desvirarCartas();
  }
}

function desativarCartas() {
  primeiraCarta.removeEventListener('click', virarCarta);
  segundaCarta.removeEventListener('click', virarCarta);

  resetarTabuleiro();
}

function desvirarCartas() {
  bloquearTabuleiro = true;

  setTimeout(() => {
    primeiraCarta.classList.remove('flip');
    segundaCarta.classList.remove('flip');

    resetarTabuleiro();
  }, 1000);
}

function resetarTabuleiro() {
  cartaVirada = false;
  bloquearTabuleiro = false;
  primeiraCarta = null;
  segundaCarta = null;
}

cartas.forEach(carta => carta.addEventListener('click', virarCarta));

botaoReiniciar.addEventListener('click', reiniciarJogo);

function reiniciarJogo() {
  cartas.forEach(carta => {
    carta.classList.remove('flip');
    carta.addEventListener('click', virarCarta);
  });
  resetarTabuleiro();
}
