function rolarDado(lados) {
    let numeroSorteado = Math.floor(Math.random() * lados) + 1;

    document.getElementById("resultado").innerText = numeroSorteado;
}