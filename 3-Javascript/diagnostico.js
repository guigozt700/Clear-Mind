// diagnostico.js
const perguntas = {
    inicio: {
        texto: "Você sente dor de cabeça?",
        opcoes: [
            { emoji: "✅", resposta: "Sim", peso: 1, proxima: "febre" },
            { emoji: "❌", resposta: "Não", peso: 0, proxima: "cansaco" }
        ]
    },
    febre: {
        texto: "Você está com febre?",
        opcoes: [
            { emoji: "🤒", resposta: "Sim", peso: 2, proxima: "cansaco" },
            { emoji: "❌", resposta: "Não", peso: 0, proxima: "cansaco" }
        ]
    },
    cansaco: {
        texto: "Você sente cansaço excessivo?",
        opcoes: [
            { emoji: "😴", resposta: "Sim", peso: 1, proxima: "dorMuscular" },
            { emoji: "❌", resposta: "Não", peso: 0, proxima: "dorMuscular" }
        ]
    },
    dorMuscular: {
        texto: "Você sente dores musculares?",
        opcoes: [
            { emoji: "🤕", resposta: "Sim", peso: 1, proxima: "final" },
            { emoji: "❌", resposta: "Não", peso: 0, proxima: "final" }
        ]
    },
    final: {
        texto: "Analisando...",
        opcoes: [] // nó final que aciona o resultado
    }
};

let perguntaAtual = "inicio";
let respostas = [];
let pontuacao = 0;

function mostrarPergunta(id) {
    perguntaAtual = id;
    const pergunta = perguntas[id];
    const perguntaEl = document.getElementById("pergunta");
    const opcoesDiv = document.getElementById("opcoes");

    perguntaEl.textContent = pergunta.texto;
    opcoesDiv.innerHTML = "";

    // se nó final, chama a exibição de resultado (função em resultado.js)
    if (!pergunta.opcoes || pergunta.opcoes.length === 0) {
        // chama função definida em resultado.js
        if (typeof mostrarResultadoFinal === "function") {
            mostrarResultadoFinal(respostas, pontuacao);
        } else {
            // fallback: mostrar apenas resumo se resultado.js não estiver carregado
            mostrarResumoSimples();
        }
        return;
    }

    pergunta.opcoes.forEach(opcao => {
        const btn = document.createElement("button");
        btn.textContent = opcao.emoji;
        btn.setAttribute("aria-label", opcao.resposta);
        btn.onclick = () => {
            respostas.push({ pergunta: pergunta.texto, resposta: opcao.resposta, peso: opcao.peso || 0 });
            pontuacao += Number(opcao.peso || 0);
            // pequena pausa visual antes de trocar pergunta (ajuda a sentir a transição)
            // você pode ajustar ou remover esse timeout
            setTimeout(() => mostrarPergunta(opcao.proxima), 150);
        };
        opcoesDiv.appendChild(btn);
    });
}

// função pública para reiniciar o teste (chamada pelo resultado.js)
function reiniciarTeste() {
    respostas = [];
    pontuacao = 0;
    perguntaAtual = "inicio";

    // mantém o título no topo e reexibe o container (animação suave)
    document.getElementById("titulo").classList.add("topo");
    const quiz = document.getElementById("quizContainer");
    quiz.classList.add("visivel");

    // mostra a primeira pergunta
    mostrarPergunta("inicio");
}

// fallback simples (caso resultado.js não carregue)
function mostrarResumoSimples() {
    const opcoesDiv = document.getElementById("opcoes");
    const perguntaEl = document.getElementById("pergunta");
    perguntaEl.textContent = "Resumo:";
    opcoesDiv.innerHTML = "";
    respostas.forEach(r => {
        const p = document.createElement("p");
        p.textContent = `${r.pergunta} → ${r.resposta}`;
        opcoesDiv.appendChild(p);
    });
}

// inicia quando o usuário clica no título
document.getElementById("titulo").addEventListener("click", () => {
    const titulo = document.getElementById("titulo");
    const quiz = document.getElementById("quizContainer");

    titulo.classList.add("topo");

    setTimeout(() => {
        quiz.classList.add("visivel");
        mostrarPergunta(perguntaAtual);
    }, 600);
});
