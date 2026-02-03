let expandir = document.querySelector(".expandir")
let recolher = document.querySelector(".recolher")
console.log(expandir)

let g2 = document.querySelector(".alternativaP1")
    g2.classList.add("esconde")

expandir.addEventListener("click", ex)
recolher.addEventListener("click", re)

function ex(){
    expandir.classList.add("esconde")
    recolher.classList.remove("esconde")
    let g2 = document.querySelector(".alternativaP1")
    g2.classList.remove("esconde")
}
function re(){
    recolher.classList.add("esconde")
    expandir.classList.remove("esconde")

    let g2 = document.querySelector(".alternativaP1")
    g2.classList.add("esconde")
}

let e1 = document.querySelector(".e1")
let r1 = document.querySelector(".r1")

e1.addEventListener("click", ex1)
r1.addEventListener("click", re1)

function ex1(){
    e1.classList.add("esconde")
    r1.classList.remove("esconde")
    let resposta1 = document.querySelector(".resposta1")
    resposta1.classList.remove("esconde")
}

function re1(){
    r1.classList.add("esconde")
    e1.classList.remove("esconde")
    let resposta1 = document.querySelector(".resposta1")
    resposta1.classList.add("esconde")
}

let e2 = document.querySelector(".e2")
let r2 = document.querySelector(".r2")

e2.addEventListener("click", ex2)
r2.addEventListener("click", re2)

function ex2(){
    e2.classList.add("esconde")
    r2.classList.remove("esconde")
    let resposta2 = document.querySelector(".resposta2")
    resposta2.classList.remove("esconde")
}

function re2(){
    r2.classList.add("esconde")
    e2.classList.remove("esconde")
    let resposta2 = document.querySelector(".resposta2")
    resposta2.classList.add("esconde")
}

let e3 = document.querySelector(".e3")
let r3 = document.querySelector(".r3")

e3.addEventListener("click", ex3)
r3.addEventListener("click", re3)

function ex3(){
    e3.classList.add("esconde")
    r3.classList.remove("esconde")
    let resposta3 = document.querySelector(".resposta3")
    resposta3.classList.remove("esconde")
}

function re3(){
    r3.classList.add("esconde")
    e3.classList.remove("esconde")
    let resposta3 = document.querySelector(".resposta3")
    resposta3.classList.add("esconde")
}