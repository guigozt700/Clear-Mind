let respostas = [];

const perguntas = [
    { texto: "O clima está agradável?", opcoes: ["😀","😐","😡"], proxima: 1 },
    { texto: "Teve uma boa noite de sono?", opcoes: ["😀","😐","😡"], proxima: 2 },
    { texto: "O seu dia está bem?", opcoes: ["😀","😐","😡"], proxima: 3 },
    { texto: "Avalie sua produtividade de hoje.", opcoes: ["😀","😐","😡"], proxima: 4 },
    { texto: "Gostou da avaliação?", opcoes: ["😀","😐","😡"], proxima: "final" }
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
        btn.onclick = ()=>{
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
