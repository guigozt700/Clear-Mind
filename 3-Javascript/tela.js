// Função para gerar o diagnóstico com base nas respostas
function gerarDiagnostico(respostas){
    const contagem = {positivo:0, neutro:0, negativo:0} //Dicionario pra contabilizar as respostas

    //Contabilização das respostas
    respostas.forEach(resposta => {
        if (resposta === "😀"){
            contagem.positivo++ //Vai contabilizar os positivos
        }
        else if (resposta === "😐"){
            contagem.neutro++ //Vai contabilizar os neutros
        }
        else if (resposta === "😡"){
            contagem.negativo++ //Vai contabilizar os negativos
        }
    });

    //Verificação do resultado
    let resultado = "positivo"
    if (contagem.negativo >= contagem.positivo && contagem.negativo >= contagem.neutro){
        resultado = "negativo"
    }
    else if (contagem.neutro >= contagem.positivo){
        resultado = "neutro"
    }

    //Definição das variaveis para imprimir o resultado
    let tituloDiag = ""
    let descricao = ""
    let gifUrl = ""

    //Exibição final
    if (resultado === "positivo"){
        tituloDiag = "✅ Você está se sentindo bem!"
        descricao = "Tudo tranquilo!"
        gifUrl = "https://media1.tenor.com/m/ZdPqcQQW540AAAAd/off-to-work.gif"
    }
    else if (resultado === "neutro"){
        tituloDiag = "Você está imparcial"
        descricao = "Talvez seja hora de refletir um pouco"
        gifUrl = "https://media1.tenor.com/m/EybHr5ghLuIAAAAd/the-simspons-homer-walking-away.gif"
    }
    else{
        tituloDiag = "⚠️ Atenção: sinais preocupantes" 
        descricao = "Recomenda-se procurar um médico"
        gifUrl = "https://media1.tenor.com/m/HY5DfnUpgZwAAAAd/seu-madruga-quebrando-tv.gif"
    }

    //Retorna um objeto com os dados
    return { tituloDiag, descricao, gifUrl }
}