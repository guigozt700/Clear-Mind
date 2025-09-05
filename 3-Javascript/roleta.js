function mostrarResultadoFinal(){
    // Esconde o quiz
    document.getElementById("quizContainer").style.display = "none";

    // Exibe resultado
    const resultadoContainer = document.getElementById("resultadoContainer");
    resultadoContainer.style.display = "flex";
    setTimeout(()=> resultadoContainer.classList.add("show"), 100);

    const lever = document.getElementById("lever");
    const slotMachine = document.getElementById("slotMachine");
    const slotImage = document.getElementById("slotImage");
    const diagnosticoContainer = document.getElementById("diagnosticoContainer");

    const resultado = gerarDiagnostico(respostas);
    const finalImage = resultado.imagem;

    let imagemRevelada = false;

    lever.addEventListener("click", () => {
        if(imagemRevelada) return;

        lever.classList.add("active");

        const imagens = [
            "https://allaboutsmiles.us/wp-content/uploads/2022/03/All-About-Smiles-SERVICES-THUMB-6-600x440.jpg",
            "https://thumbs.dreamstime.com/b/homem-com-express%C3%A3o-neutra-53831400.jpg",
            "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2601650.jpg"
        ];

        let contador = 0;
        const intervalo = setInterval(()=>{
            slotImage.src = imagens[contador % imagens.length];
            contador++;
        }, 100);

        setTimeout(()=>{
            clearInterval(intervalo);
            slotImage.src = finalImage;
            imagemRevelada = true;

            // Move roleta e mostra diagnóstico
            slotMachine.classList.add("move-left");
            diagnosticoContainer.innerHTML = `
                <h2>${resultado.titulo}</h2>
                <p>${resultado.descricao}</p>
            `;
            diagnosticoContainer.classList.add("show");

            lever.classList.remove("active");
        }, 2000);
    });
}
