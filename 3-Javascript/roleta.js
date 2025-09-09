async function gerarDiagnosticoIA(respostas) {
    const response = await fetch("http://localhost:3000/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ respostas }),
    });

    const data = await response.json();
    return {
        titulo: "Diagnóstico Personalizado",
        descricao: data.diagnostico,
        imagem: "https://tse2.mm.bing.net/th/id/OIP.aSfsXeSxv53ZjFS7WJuc0AAAAA?w=400&h=400&rs=1&pid=ImgDetMain&o=7&rm=3" // pode trocar
    };
}

async function mostrarResultadoFinal() {
    document.getElementById("quizContainer").style.display = "none";
    const resultadoContainer = document.getElementById("resultadoContainer");
    resultadoContainer.style.display = "flex";
    setTimeout(() => resultadoContainer.classList.add("show"), 100);

    const lever = document.getElementById("lever");
    const slotMachine = document.getElementById("slotMachine");
    const slotImage = document.getElementById("slotImage");
    const diagnosticoContainer = document.getElementById("diagnosticoContainer");

    const resultado = await gerarDiagnosticoIA(respostas);
    const finalImage = resultado.imagem;
    let imagemRevelada = false;

    lever.addEventListener("click", () => {
        if (imagemRevelada) return;
        lever.classList.add("active");

        const imagens = [
            "https://allaboutsmiles.us/wp-content/uploads/2022/03/All-About-Smiles-SERVICES-THUMB-6-600x440.jpg",
            "https://thumbs.dreamstime.com/b/homem-com-express%C3%A3o-neutra-53831400.jpg",
            "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2601650.jpg"
        ];

        let contador = 0;
        const intervalo = setInterval(() => {
            slotImage.src = imagens[contador % imagens.length];
            contador++;
        }, 100);

        setTimeout(() => {
            clearInterval(intervalo);
            slotImage.src = finalImage;
            imagemRevelada = true;

            slotMachine.classList.add("move-left");
            diagnosticoContainer.innerHTML = `
                <h2>${resultado.titulo}</h2>
                <p>${resultado.descricao}</p>
            `;
            diagnosticoContainer.classList.add("show");

            const botaoContainer = document.createElement("div");
            botaoContainer.classList.add("botao-container");
            const botaoReset = document.createElement("button");
            botaoReset.textContent = "Fazer outro diagnóstico";
            botaoReset.classList.add("reset-btn");
            botaoContainer.appendChild(botaoReset);
            diagnosticoContainer.appendChild(botaoContainer);

            botaoReset.onclick = () => {
                respostas = [];
                document.getElementById("resultadoContainer").style.display = "none";
                diagnosticoContainer.innerHTML = "";
                slotMachine.classList.remove("move-left");
                lever.classList.remove("active");
                document.getElementById("quizContainer").style.display = "block";
                mostrarPergunta(0);
            };

            lever.classList.remove("active");
        }, 2000);
    });
}
