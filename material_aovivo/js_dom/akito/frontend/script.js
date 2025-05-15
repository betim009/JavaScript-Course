var botao = document.getElementById('enviar');
var quantidade = document.getElementById('quantidade');
var diminuir = document.getElementById('diminuir');

var contador = 1;


botao.addEventListener('click', function() {
    contador += 1

    quantidade.textContent = contador;
});

diminuir.addEventListener('click', function() {
    contador -= 1

    quantidade.textContent = contador;
});