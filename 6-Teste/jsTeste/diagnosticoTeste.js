const imagens = {
    positivo: "https://allaboutsmiles.us/wp-content/uploads/2022/03/All-About-Smiles-SERVICES-THUMB-6-600x440.jpg",
    neutro: "https://thumbs.dreamstime.com/b/homem-com-express%C3%A3o-neutra-53831400.jpg",
    negativo: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2601650.jpg"
};

function gerarDiagnostico(respostas){
    const positivos = respostas.filter(r => r==="😀").length;
    const neutros = respostas.filter(r => r==="😐").length;
    const negativos = respostas.filter(r => r==="😡").length;

    if(positivos >= neutros && positivos >= negativos){
        return { tituloDiag: "Diagnóstico Positivo", descricao: "Você está se sentindo muito bem!", imagem: imagens.positivo };
    } else if(neutros >= positivos && neutros >= negativos){
        return { tituloDiag: "Diagnóstico Neutro", descricao: "Você está em um estado equilibrado.", imagem: imagens.neutro };
    } else {
        return { tituloDiag: "Diagnóstico Negativo", descricao: "Você não está em um bom momento.", imagem: imagens.negativo };
    }
}
