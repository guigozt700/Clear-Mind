const imagens = [
    "https://f.i.uol.com.br/fotografia/2020/03/03/15832183555e5dfeb3af226_1583218355_3x2_rt.jpg",
    "https://a-static.mlcdn.com.br/800x560/boneca-doutora-brinquedo-35cm/oliststore/mgl2eydwaea4z37w/5ba81aeb49b260fe37cc6b4ab3864532.jpeg",
    "https://i.scdn.co/image/ab6761610000517476d5cae03c60c909fa701cfd",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRWBePrmgf-GxVageZyGAgajeob3pT-ZwAIIHVhNQ9fp70o3p95uYwd3__prYY-Mn34M&usqp=CAU",
    "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2024/11/12/drnow02-tru41m75bfc5.jpg"
];

const slotImage = document.getElementById("slotImage")
const lever = document.getElementById("lever")

let intervaloAnimacao = null
let imagemRevelada = false

function iniciarAnimacao(){
    let contador = 0

    intervaloAnimacao = setInterval(function(){
        const imagemAtual = imagens[contador % imagens.length]

        slotImage.src = imagemAtual
        contador++
    }, 80)
}

lever.addEventListener("click", function(){
    if(intervaloAnimacao || imagemRevelada) return;

    imagemFinal = imagens[Math.floor(Math.random() * imagens.length)]
    iniciarAnimacao()

    setTimeout(function(){
        clearInterval(intervaloAnimacao);
        intervaloAnimacao = null;
        slotImage.src = imagemFinal;
        imagemRevelada = true;
    }, 2500)
})

