function mostrarResultadoFinal(respostasArray, pontuacaoTotal) {
    const opcoesDiv = document.getElementById("opcoes");
    const perguntaEl = document.getElementById("pergunta");

    // Diagnóstico no topo
    perguntaEl.textContent = ""; // esvazia título para não confundir

    // Container diagnóstico
    const card = document.createElement("div");
    card.className = "resultado-card";
    card.style.border = "1px solid transparent";
    card.style.padding = "20px";
    card.style.borderRadius = "12px";
    card.style.marginBottom = "20px";
    card.style.background = "rgba(255,255,255,0.05)";
    card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
    card.style.textAlign = "center";
    card.style.color = "#f0f0f0";
    card.style.fontWeight = "600";

    let tituloDiag = "";
    let descricao = "";
    let cor = "";

    if (pontuacaoTotal >= 3) {
        tituloDiag = "⚠️ Alerta";
        descricao = "Seus sintomas indicam um nível alto de atenção. Procure um médico.";
        cor = "#ff6b6b";
    } else if (pontuacaoTotal === 2) {
        tituloDiag = "⚠️ Atenção";
        descricao = "Alguns sintomas merecem monitoramento. Observe e busque orientação se piorar.";
        cor = "#f6c85f";
    } else {
        tituloDiag = "✅ Provável bem-estar";
        descricao = "Parece que você está bem, mas fique atento a mudanças.";
        cor = "#6be39b";
    }

    const h = document.createElement("h2");
    h.textContent = tituloDiag;
    h.style.color = cor;
    h.style.marginBottom = "10px";

    const p = document.createElement("p");
    p.textContent = descricao;
    p.style.fontSize = "1.1rem";

    card.appendChild(h);
    card.appendChild(p);
    opcoesDiv.appendChild(card);

    // Depois o resumo das respostas (opções escolhidas)
    const resumoTitulo = document.createElement("h3");
    resumoTitulo.textContent = "📋 Suas respostas:";
    resumoTitulo.style.marginTop = "30px";
    resumoTitulo.style.marginBottom = "12px";
    resumoTitulo.style.color = "#ddd";
    opcoesDiv.appendChild(resumoTitulo);

    const lista = document.createElement("div");
    lista.className = "resumo-list";
    respostasArray.forEach(r => {
        const p = document.createElement("p");
        p.textContent = `${r.pergunta} → ${r.resposta}`;
        p.style.margin = "6px 0";
        lista.appendChild(p);
    });
    opcoesDiv.appendChild(lista);

    // Botão refazer teste
    const btnRefazer = document.createElement("button");
    btnRefazer.textContent = "🔄 Refazer teste";
    btnRefazer.style.marginTop = "30px";
    btnRefazer.onclick = () => {
        if (typeof reiniciarTeste === "function") {
            reiniciarTeste();
        } else {
            location.reload();
        }
    };
    opcoesDiv.appendChild(btnRefazer);
}
