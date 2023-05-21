// Exercício 5
// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez
// e retorne os movimentos que ela pode fazer.

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// ⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma 
// peça com letras maiúsculas quanto com letras minúsculas,
// sem aumentar a quantidade de condicionais. 
// Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas
// (lower case).

// Exemplo: Bispo -> Diagonais.

let chessPiece = 'BISPO';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei -> Uma casa para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo -> Diagonais.');
    break;
  case 'rainha':
    console.log('Rainha -> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
};