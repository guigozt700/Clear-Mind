function mostrarResultadoFinal(respostasArray) {
    const opcoesDiv = document.getElementById("opcoes");
    const perguntaEl = document.getElementById("pergunta");

    perguntaEl.textContent = "";

    // Contagem dos tipos de resposta
    const contagem = { positivo: 0, neutro: 0, negativo: 0 };
    respostasArray.forEach(r => {
        if (contagem[r.tipo] !== undefined) contagem[r.tipo]++;
    });

    // Determinar qual tipo prevalece
    let maiorTipo = "positivo";
    if (contagem.negativo >= contagem.positivo && contagem.negativo >= contagem.neutro) maiorTipo = "negativo";
    else if (contagem.neutro >= contagem.positivo && contagem.neutro >= contagem.negativo) maiorTipo = "neutro";

    // Definir diagnóstico e gif conforme tipo
    let tituloDiag = "";
    let descricao = "";
    let gifUrl = "";

    if (maiorTipo === "positivo") {
        tituloDiag = "✅ Você está se sentindo bem!";
        descricao = "Seus sintomas indicam que está tudo tranquilo.";
        gifUrl = "https://media1.tenor.com/m/ZdPqcQQW540AAAAd/off-to-work.gif"; // feliz
    } else if (maiorTipo === "neutro") {
        tituloDiag = "⚠️ Monitoramento necessário.";
        descricao = "Alguns sintomas podem merecer atenção.";
        gifUrl = "https://media1.tenor.com/m/EybHr5ghLuIAAAAd/the-simspons-homer-walking-away.gif"; // neutro
    } else {
        tituloDiag = "⚠️ Atenção: sintomas preocupantes.";
        descricao = "Recomenda-se procurar um médico.";
        gifUrl = "https://media1.tenor.com/m/HY5DfnUpgZwAAAAd/seu-madruga-quebrando-tv.gif"; // triste
    }

    // Limpa e cria o card com resultado
    opcoesDiv.innerHTML = "";
    const card = document.createElement("div");
    card.className = "resultado-card";

    const h = document.createElement("h2");
    h.textContent = tituloDiag;
    card.appendChild(h);

    const p = document.createElement("p");
    p.textContent = descricao;
    card.appendChild(p);

    const img = document.createElement("img");
    img.src = gifUrl;
    img.alt = maiorTipo;
    img.style.width = "120px";
    img.style.marginTop = "15px";
    img.style.borderRadius = "15px";
    card.appendChild(img);

    opcoesDiv.appendChild(card);

    // Botão para refazer o teste
    const btnRefazer = document.createElement("button");
    btnRefazer.textContent = "🔄 Refazer teste";
    btnRefazer.style.marginTop = "30px";
    btnRefazer.onclick = () => {
        if (typeof reiniciarTeste === "function") reiniciarTeste();
        else location.reload();
    };
    opcoesDiv.appendChild(btnRefazer);
}
