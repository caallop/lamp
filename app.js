/**
 * Simples simulador de uma lampada
 * @author guilherme rosa lopes
 */

// variaveis de apoio

let chave = false // o interruptor inicia desligado
let lampada = true // a lampada está OK

//pré carregamento do arquivo de audio
let som = new Audio()
som.src = "som/glassbreaking.wav"


function quebrar() {
    if (lampada === true)
        document.getElementById('lamp').src = "img/broken.jpg"
    // reproduzindo um arquivo de audio
    som.play()
    // apoio a çogica para o JS identificar a lampada quebrada
    lampada = false
}

function onoff() {
    if (chave === false) {

        document.getElementById('interruptor').src = "img/swon.png"
        chave = true // O JS sabe que a chave esta ligada
        // acender a lampada
        if (lampada === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        }
    } else {
        document.getElementById('interruptor').src = "img/swoff.png"
        chave = false
        // desliga a lampada
        if (lampada === true) {
            document.getElementById('lamp').src = "img/off.jpg"
        }

    }

}
//passo 1 - capturar os eemtnos do HTML que eu quero manipular
const botao = document.getElementById('button')
const lampadaImg = document.getElementById('lamp')

//passo 2 - manipular o evento mouse pressionado
//addEventListener ("escuta todos os eventos em tempos reais")
//mousedown (mouse pressionado constatenmente)
//mouseup (soltar o botao do mouse)

botao.addEventListener('mousedown', (event) => {
    console.log("botao do mouse pressionado")
    if (lampada === true && chave === false) {
        lampadaImg.src = "img/on.jpg" //troca a imagem
    }
})

//soltar i botao do mouse
botao.addEventListener('mouseup', (event) => {
    console.log("botao do mouse solto")
    event.preventDefault()
    if (lampada === true && chave === false) {
        lampadaImg.src = "img/off.jpg" //troca a imagem
    }
    //ignorar o comportarmento padrao
    //console.log ()


})
botao.addEventListener('touchstart', (event) => {
    console.log("a tela esta sendo pressionada")
    if (lampada === true && chave === false) {
        lampadaImg.src = "img/on.jpg" //troca a imagem
    }
})
botao.addEventListener('touchchend', (event) => {
    console.log("a tela nao esta sendo pressionada")
    if (lampada === true && chave === false) {
        lampadaImg.src = "img/off.jpg" //troca a imagem
    }
})

//lanterna torch
function inicializarlanterna(){
    // lanterna (pré carregamento)
let stream, track
inicializarLanterna()

// Lanterna
// Inicializa o stream e configura o track apenas uma vez
async function inicializarLanterna() {
    try {
        // Solicita acesso à câmera traseira sem exibir o vídeo
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
        })
        
        // Obtém o track do vídeo para controlar a lanterna
        track = stream.getVideoTracks()[0]
        
        // Verifica se o dispositivo suporta o uso da lanterna
        const capabilities = track.getCapabilities()
        if (!capabilities.torch) {
            console.log("Lanterna não suportada no dispositivo.")
            return
        }
    } catch (error) {
        console.error(`Erro ao inicializar a lanterna: ${error}`)
    }
}

// Função para ligar a lanterna (torch)
async function ligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}

// Função para desligar a lanterna sem parar o stream
async function desligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: false }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}
}