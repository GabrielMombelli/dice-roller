function rolarDado(lados) {
    let numeroSorteado = Math.floor(Math.random() * lados) + 1;

    document.getElementById("resultado").innerText = numeroSorteado;

    let listaHistorico = document.getElementById("lista-historico");
    let novoItemLog = document.createElement("li");

    novoItemLog.innerHTML = `<span>Dado D${lados}</span> <strong>${numeroSorteado}</strong>`;
    listaHistorico.prepend(novoItemLog);
}