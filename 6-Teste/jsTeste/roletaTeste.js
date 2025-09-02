function mostrarResultadoFinal(){
    document.getElementById("quizContainer").style.display = "none";
    const resultadoContainer = document.getElementById("resultadoContainer");
    resultadoContainer.classList.add("show");

    const { tituloDiag, descricao, imagem } = gerarDiagnostico(respostas);

    const lever = document.getElementById("lever");
    const slotImage = document.getElementById("slotImage");
    const slotMachine = document.getElementById("slotMachine");
    const diagnosticoContainer = document.getElementById("diagnosticoContainer");

    let imagemRevelada = false;

    lever.addEventListener("click", ()=>{
        if(imagemRevelada) return;

        let contador = 0;
        const imgs = [imagens.positivo, imagens.neutro, imagens.negativo];
        const intervalo = setInterval(()=>{
            slotImage.src = imgs[contador % imgs.length];
            contador++;
        }, 100);

        setTimeout(()=>{
            clearInterval(intervalo);
            slotImage.src = imagem;
            imagemRevelada = true;

            slotMachine.classList.add("move-left");
            diagnosticoContainer.innerHTML = `<h2>${tituloDiag}</h2><p>${descricao}</p>`;
            diagnosticoContainer.classList.add("show");
        }, 2000);
    });
}
