const btnCalcular = document.querySelector('#btnCalcular')

const nome = document.querySelector('#nome')

const inputNota1 = document.querySelector("#nota1")

const inputNota2 = document.querySelector("#nota2")

const nomeAluno = document.querySelector('#nomeAluno')

const media = document.querySelector('#Medias')

const primeirobimestre = document.querySelector('#bimestre1')

const segundobimestre = document.querySelector('#bimestre2')

btnCalcular.addEventListener("click" , clicou)  

function clicou(){
    nomeAluno.innerText = nome.value
    bimestre1.innerText = nota1.value
    bimestre2.innerText = nota2.value
    const mediavalor = calcularMedia()
    media.innerText = mediavalor
    console.log(calcularMedia())
}
function calcularMedia (){
    const nota1 = parseFloat(inputNota1.value)
    const nota2 = parseFloat(inputNota2.value)
    return (nota1 + nota2) /2
}