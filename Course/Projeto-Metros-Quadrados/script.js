function calcular() {
    let metros1 = parseFloat(document.getElementById("metros1").value);
    let metros2 = parseFloat(document.getElementById("metros2").value);

    let resultado = metros1 * metros2;

    let square = document.getElementById("square");
    let h1 = document.getElementById("resultado");

    h1.textContent = `${resultado} m²`;


    if (resultado <= 100) {
        square.style.backgroundColor = "black";
    } else if (resultado > 100 && resultado <= 500) {
        square.style.backgroundColor = "red";
    } else if (resultado > 500 && resultado < 10000 ) {
        square.style.backgroundColor = "blue";
    } else {
        square.style.backgroundColor = "yellow";
    }

    square.style.width = resultado + "px";
    square.style.height = resultado + "px";
}

