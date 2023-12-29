// 1° função
function welcome() {
    alert("Seja bem-vindo")
}

//2° função
function mostrarTela(msg) {
    return alert(msg)
 }

//3° função
const calculadora = (num1, num2, operacao) => {
    switch(operacao) {
        case "soma":
            return num1 + num2
        case "subtração":
            return num1 - num2
        case "multiplicação":
            return num1 * num2
        case "divisão":
            return num1 / num2
        default:
            return "Operação inválida"
    }
}

welcome()
num1 = Number(prompt("Digite o valor do primeiro número"))
num2 = Number(prompt("Digite o valor do segundo número"))
operacao = prompt('Digite qual operação você deseja fazer')
let resultadoCalculadora = calculadora(num1, num2, operacao);
mostrarTela(`O resultado da operação é ${resultadoCalculadora}`)
mostrarTela('Programa finalizado')
console.log(num1, num2)

