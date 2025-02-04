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