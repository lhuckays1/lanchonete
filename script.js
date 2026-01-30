let contador = 1
document.querySelector("#bola1").checked = true

setInterval(function(){
    proxima();
},5000)

function proxima(){
    contador = contador + 1
    if(contador > 2){
        contador = 1
    }
    document.querySelector("#bola"+contador).checked = true
}


let sanduiche = document.querySelector("#sanduiche")
let valor = 0

sanduiche.addEventListener("change", comer)

function comer(){
    let escolha = sanduiche.value
    if(escolha == "sanduiche1"){
        valor = 0
        valor = valor + 25
    }
    if(escolha == "sanduiche2"){
        valor = 0
        valor = valor + 30
    }
    if(escolha == "sanduiche3"){
        valor = 0
        valor = valor + 33
    }
    if(escolha == "sanduiche4"){
        valor = 0
        valor = valor + 42
    }
    if(escolha == "sanduiche5"){
        valor = 0
        valor = valor + 48
    }
    if(escolha == "sanduiche6"){
        valor = 0
        valor = valor + 50
    }
    document.querySelector("#resposta").innerHTML = `O valor do seu pedido é ${valor}`
}


