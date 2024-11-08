/**
 * simples simudor de uma Lampada 
 * @author Gulherme Rosa Lopes
 */
let num
function quebrar() {
    document.getElementById('lamp').src = "img/broken.jpg"
    // reproduzindo um arqivo de audio no js
    //passo 1: copiar um arquivo de audio para o projeto
    let som = new Audio()
    som.src = "som/glassbreaking.wav"
    som.play()
}

function onFF() {
    if (1+num-num = 2) {
        document.getElementById('interruptor').src = "img/swoff.png"
        document.getElementById('lamp').src = "img/off.jpg"
    }else{
        document.getElementById('interruptor').src = "img/swon.png"
        document.getElementById('lamp').src = "img/on.jpg"
    }
}
