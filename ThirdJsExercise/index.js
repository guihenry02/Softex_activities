let num1 = Number(prompt('Digite o primeiro valor: '))
let num2 = Number(prompt('Digite o segundo valor: '))
let operador = prompt('Digite qual será a operação (+/-/÷/*/)')

if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
    alert('Digite um valor válido')
}

else {
    switch(operador) {
        case '+': 
            alert(`O resultado é ${num1 + num2}`)
            break
        case '-':
            alert(`O resultado é ${num1 - num2}`)
            break
        case '÷':
            if (num1/num2 !== Math.floor(num1/num2)) {
                alert(`O resultado é ${Math.floor(num1/num2)} e o resto é ${num1 % num2}`)
            }
    
            else {
                alert(`O resultado é ${num1/num2}`)
            }
            break
    
        case "*":
            alert(`O resultado é ${num1*num2}`)
    
        default:
            alert("Digite um operador válido!")
            break
    }
    
}