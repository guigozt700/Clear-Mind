let respostas = [];

const perguntas = [
    { texto: "Como você descreveria seu humor ao longo do dia?", opcoes: ["😀", "😐", "😡"], proxima: 1 },
    { texto: "Como você avaliaria sua qualidade de sono na última noite?", opcoes: ["😀", "😐", "😡"], proxima: 2 },
    { texto: "Como você se sentiu em relação à sua concentração hoje?", opcoes: ["😀", "😐", "😡"], proxima: 3 },
    { texto: "Como está seu nível de energia agora?", opcoes: ["😀", "😐", "😡"], proxima: 4 },
    { texto: "Como você avaliaria seu estresse hoje?", opcoes: ["😀", "😐", "😡"], proxima: 5 },
    { texto: "Como você classificaria sua motivação para realizar tarefas?", opcoes: ["😀", "😐", "😡"], proxima: 6 },
    { texto: "Como você avalia sua alimentação ao longo do dia?", opcoes: ["😀", "😐", "😡"], proxima: 7 },
    { texto: "Como você descreveria seus momentos de lazer ou descanso hoje?", opcoes: ["😀", "😐", "😡"], proxima: 8 },
    { texto: "Como você avalia sua produtividade hoje?", opcoes: ["😀", "😐", "😡"], proxima: 9 },
    { texto: "Como você está se sentindo em relação ao seu equilíbrio geral (físico, emocional e mental)?", opcoes: ["😀", "😐", "😡"], proxima: "final" }
];


function mostrarPergunta(index){
    const pergunta = perguntas[index];
    const perguntaEl = document.getElementById("pergunta");
    const opcoesDiv = document.getElementById("opcoes");

    perguntaEl.textContent = pergunta.texto;
    opcoesDiv.innerHTML = "";

    pergunta.opcoes.forEach(opcao => {
        const btn = document.createElement("button");
        btn.textContent = opcao;
        btn.onclick = ()=> {
            respostas.push(opcao);
            if(pergunta.proxima === "final"){
                mostrarResultadoFinal();
            } else {
                mostrarPergunta(pergunta.proxima);
            }
        };
        opcoesDiv.appendChild(btn);
    });
}

mostrarPergunta(0);
