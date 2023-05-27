function calcular() {
    let metros1 = parseFloat(document.getElementById("metros1").value);
    let metros2 = parseFloat(document.getElementById("metros2").value);

    let resultado = metros1 * metros2;

    let square = document.getElementById("square");
    let h1 = document.getElementById("resultado");
    
    h1.textContent = `${resultado} m²`;

    square.style.backgroundColor = "black";
    square.style.width = resultado + "px";
    square.style.height = resultado + "px";
}

