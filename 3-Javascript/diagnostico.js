function gerarDiagnostico(respostas){
    const positivos = respostas.filter(r=>r==="😀").length;
    const neutros = respostas.filter(r=>r==="😐").length;
    const negativos = respostas.filter(r=>r==="😡").length;

    if(positivos >= neutros && positivos >= negativos){
        return {
            titulo: "Diagnóstico Positivo",
            descricao: "Você está em um ótimo momento!",
            imagem: "https://allaboutsmiles.us/wp-content/uploads/2022/03/All-About-Smiles-SERVICES-THUMB-6-600x440.jpg"
        };
    } else if(neutros >= positivos && neutros >= negativos){
        return {
            titulo: "Diagnóstico Neutro",
            descricao: "Você está equilibrado, mas pode melhorar.",
            imagem: "https://thumbs.dreamstime.com/b/homem-com-express%C3%A3o-neutra-53831400.jpg"
        };
    } else {
        return {
            titulo: "Diagnóstico Negativo",
            descricao: "Parece que não está sendo um bom momento. Cuide-se!",
            imagem: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2601650.jpg"
        };
    }
}
