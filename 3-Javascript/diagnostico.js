const perguntas = {
    inicio: {
        texto: "O clima está agradável?",
        opcoes: [
            { resposta: "😀", tipo: "positivo", proxima: "sono" },
            { resposta: "😐", tipo: "neutro", proxima: "sono" },
            { resposta: "😡", tipo: "negativo", proxima: "sono" }
        ]
    },
    sono: {
        texto: "Teve uma boa noite de sono?",
        opcoes: [
            { resposta: "😀", tipo: "positivo", proxima: "dia" },
            { resposta: "😐", tipo: "neutro", proxima: "dia" },
            { resposta: "😡", tipo: "negativo", proxima: "dia" }
        ]
    },
    dia: {
        texto: "O seu dia está bem?",
        opcoes: [
            { resposta: "😀", tipo: "positivo", proxima: "produtividade" },
            { resposta: "😐", tipo: "neutro", proxima: "produtividade" },
            { resposta: "😡", tipo: "negativo", proxima: "produtividade" }
        ]
    },
    produtividade: {
        texto: "Avalie o seu nível de produtividade de hoje.",
        opcoes: [
            { resposta: "😀", tipo: "positivo", proxima: "superou" },
            { resposta: "😐", tipo: "neutro", proxima: "superou" },
            { resposta: "😡", tipo: "negativo", proxima: "superou" }
        ]
    },
    superou: {
        texto: "Algo na sua semana superou suas expectativas?",
        opcoes: [
            { resposta: "😀", tipo: "positivo", proxima: "atividades" },
            { resposta: "😐", tipo: "neutro", proxima: "atividades" },
            { resposta: "😡", tipo: "negativo", proxima: "atividades" }
        ]
    },
    atividades: {
        texto: "Gostaria de fazer atividades mais estimulantes?",
        opcoes: [
            { resposta: "😀", tipo: "positivo", proxima: "noticias" },
            { resposta: "😐", tipo: "neutro", proxima: "noticias" },
            { resposta: "😡", tipo: "negativo", proxima: "noticias" }
        ]
    },
    noticias: {
        texto: "Como se sente em relação às notícias da atualidade?",
        opcoes: [
            { resposta: "😀", tipo: "positivo", proxima: "estudos" },
            { resposta: "😐", tipo: "neutro", proxima: "estudos" },
            { resposta: "😡", tipo: "negativo", proxima: "estudos" }
        ]
    },
    estudos: {
        texto: "Você está aproveitando os seus estudos?",
        opcoes: [
            { resposta: "😀", tipo: "positivo", proxima: "gostou" },
            { resposta: "😐", tipo: "neutro", proxima: "gostou" },
            { resposta: "😡", tipo: "negativo", proxima: "gostou" }
        ]
    },
    gostou: {
        texto: "Você gostou de responder a avaliação?",
        opcoes: [
            { resposta: "😀", tipo: "positivo", proxima: "final" },
            { resposta: "😐", tipo: "neutro", proxima: "final" },
            { resposta: "😡", tipo: "negativo", proxima: "final" }
        ]
    },
    final: {
        texto: "Analisando seus resultados...",
        opcoes: []
    }
};

let respostas = [];

function mostrarPergunta(id) {
    const pergunta = perguntas[id];
    const perguntaEl = document.getElementById("pergunta");
    const opcoesDiv = document.getElementById("opcoes");

    perguntaEl.textContent = pergunta.texto;
    opcoesDiv.innerHTML = "";

    if (!pergunta.opcoes || pergunta.opcoes.length === 0) {
        if (typeof mostrarResultadoFinal === "function") {
            mostrarResultadoFinal(respostas);
        }
        return;
    }

    pergunta.opcoes.forEach(opcao => {
        const btn = document.createElement("button");
        btn.textContent = opcao.resposta;
        btn.onclick = () => {
            respostas.push({ pergunta: pergunta.texto, resposta: opcao.resposta, tipo: opcao.tipo });
            setTimeout(() => mostrarPergunta(opcao.proxima), 150);
        };
        opcoesDiv.appendChild(btn);
    });
}

function reiniciarTeste() {
    respostas = [];
    mostrarPergunta("inicio");
}

document.getElementById("titulo").addEventListener("click", () => {
    document.getElementById("titulo").classList.add("topo");
    document.getElementById("quizContainer").classList.add("visivel");
    mostrarPergunta("inicio");
});
