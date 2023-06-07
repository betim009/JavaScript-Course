function calcular() {
    const result = createResult();
    const h1 = document.getElementById("resultado");
    h1.textContent = `${result} m²`;

    const square = document.getElementById("square");
    square.style.width = result + "px";
    square.style.height = result + "px";

    createSquare(result);
};

function createResult() {
    const metros1 = parseFloat(document.getElementById("metros1").value);
    const metros2 = parseFloat(document.getElementById("metros2").value);

    return metros1 * metros2;
};

function createSquare(result) {
    if (result <= 100) {
        return square.style.backgroundColor = "black";
    } else if (result > 100 && result <= 500) {
        return square.style.backgroundColor = "red";
    } else if (result > 500 && result < 10000 ) {
        return square.style.backgroundColor = "blue";
    } else {
        return square.style.backgroundColor = "yellow";
    };
};



