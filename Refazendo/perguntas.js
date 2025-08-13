document.getElementById("titulo").addEventListener("click", () => {
    document.getElementById("titulo").classList.add("topo")
    document.getElementById("quizContainer").classList.add("visivel")
    mostrarPergunta(0) //Inicia com a pergunta no index 0 (primeira)
})

let respostas = [] //Armazena as respostas

// Array com todas as perguntas
const perguntas = [
    { texto: "O clima está agradável?", opcoes: ["😀","😐","😡"], proxima: 1 },
    { texto: "Teve uma boa noite de sono?", opcoes: ["😀","😐","😡"], proxima: 2 },
    { texto: "O seu dia está bem?", opcoes: ["😀","😐","😡"], proxima: 3 },
    { texto: "Avalie o seu nível de produtividade de hoje.", opcoes: ["😀","😐","😡"], proxima: 4 },
    { texto: "Algo na sua semana superou suas expectativas?", opcoes: ["😀","😐","😡"], proxima: 5 },
    { texto: "Gostaria de fazer atividades mais estimulantes?", opcoes: ["😀","😐","😡"], proxima: 6 },
    { texto: "Como se sente em relação às notícias da atualidade?", opcoes: ["😀","😐","😡"], proxima: 7 },
    { texto: "Você está aproveitando os seus estudos?", opcoes: ["😀","😐","😡"], proxima: 8 },
    { texto: "Você gostou de responder a avaliação?", opcoes: ["😀","😐","😡"], proxima: 9 },
    { texto: "Analisando seus resultados...", opcoes: ["✅ Ver resultado"], proxima: "final" } // Última pergunta agora tem um botão
]

// Função para mostrar a pergunta na tela
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

            if (pergunta.proxima === "final"){ //Se a proxima pergunta for a ultima...
                mostrarResultadoFinal()
            }
            else // Se não, vai para a próxima pergunta
            { 
                mostrarPergunta(pergunta.proxima)
            }
        }
        opcoesDiv.appendChild(btn)
    })
}

// Função para mostrar o resultado final
function mostrarResultadoFinal(){
    const perguntaEl = document.getElementById("pergunta")
    const opcoesDiv = document.getElementById("opcoes")

    const { tituloDiag, descricao, gifUrl } = gerarDiagnostico(respostas) //Recebe os dados do diagnóstico

    opcoesDiv.innerHTML = "" 
    perguntaEl.textContent = "" //Limpa a pergunta

    const card = document.createElement("div") //Cria uma div
    card.className = "resultado-card" //Dou um name para essa div

    // Título do diagnóstico
    const h = document.createElement("h2")
    h.textContent = tituloDiag //Vai receber o texto do diagnostico
    card.appendChild(h)

    // Descrição
    const p = document.createElement("p")
    p.textContent = descricao //Vai receber a descrição do diagnostico
    card.appendChild(p)

    // Imagem/GIF
    const img = document.createElement("img")
    img.src = gifUrl
    img.alt = tituloDiag
    img.style.width = "300px" //Estilo do gif
    card.appendChild(img)

    opcoesDiv.appendChild(card)

    // Botão pra refazer o teste
    const btnRefazer = document.createElement("button")
    btnRefazer.textContent = "🔄 Refazer teste"
    btnRefazer.onclick = () =>{ 
        respostas = [] //Zera o array
        mostrarPergunta(0) //Volta para a primeira pergunta
    }
    opcoesDiv.appendChild(btnRefazer)
}