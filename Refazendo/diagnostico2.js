let respostas = [] //Armazena as respostas

const perguntas = [
    { texto: "O clima está agradável?", opcoes: ["😀","😐","😡"], proxima: "sono" },
    { texto: "Teve uma boa noite de sono?", opcoes: ["😀","😐","😡"], proxima: "dia" },
    { texto: "O seu dia está bem?", opcoes: ["😀","😐","😡"], proxima: "produtividade" },
    { texto: "Avalie o seu nível de produtividade de hoje.", opcoes: ["😀","😐","😡"], proxima: "superou" },
    { texto: "Algo na sua semana superou suas expectativas?", opcoes: ["😀","😐","😡"], proxima: "atividades" },
    { texto: "Gostaria de fazer atividades mais estimulantes?", opcoes: ["😀","😐","😡"], proxima: "noticias" },
    { texto: "Como se sente em relação às notícias da atualidade?", opcoes: ["😀","😐","😡"], proxima: "estudos" },
    { texto: "Você está aproveitando os seus estudos?", opcoes: ["😀","😐","😡"], proxima: "gostou" },
    { texto: "Você gostou de responder a avaliação?", opcoes: ["😀","😐","😡"], proxima: "final" },
    {texto: "Analisando seus resultados...", opcoes: [] }
]

function mostrarPergunta(index){
    const pergunta = perguntas[index] //Acessa o index de cada objeto
    const perguntaEl = document.getElementById("pergunta")
    const opcoesDiv = document.getElementById("opcoes")

    perguntaEl.textContent = pergunta.texto
    opcoesDiv.innerHTML = ""

    pergunta.opcoes.forEach(opcao =>{ //Acessa os elementos do array opcoes
        const btn = document.createElement("button") //Cria um botão
        btn.textContent = opcao //btn recebe cada elemento
        btn.onclick = () =>{
            respostas.push(opcao) //Envia para o array a opcao selecionada

            if (pergunta.proxima == "final"){ //Se a proxima pergunta for a ultima...
                mostrarResultadoFinal()
            }
            else //Se não encontra o index da proxima pergunta de acordo com a chave "proxima"
            { 
                mostrarPergunta(perguntas.findIndex(p => p.proxima === pergunta.proxima))
            }
        }
        opcoes.Div.appendChild(btn)
    })
}

function mostrarResultadoFinal(){
    const opcoesDiv = document.getElementById("opcoes")
    const perguntaEl = document.getElementById("pergunta")
}

document.getElementById("titulo").addEventListener("click", () => {
    document.getElementById("quizContainer").classList.add("visivel")
    mostrarPergunta(0) //Inicia com a pergunta no index 0 (primeira)
})