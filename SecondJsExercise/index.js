let nota1 = Number(prompt('Digite a primeira nota:'))
let nota2 = Number(prompt('Digite a segunda nota: '))
let nota3 = Number(prompt('Digite a terceira nota: '))
let nota = [nota1, nota2, nota3]
let nota_valida = nota.every(numero => numero >= 0 && numero <= 10)

while( isNaN(nota1, nota2, nota3) || nota_valida === false) {
    nota1 = Number(prompt('Digite a primeira nota:'))
    nota2 = Number(prompt('Digite a segunda nota: '))
    nota3 = Number(prompt('Digite a terceira nota: '))
    nota = [nota1, nota2, nota3]
    nota_valida = nota.every(numero => numero >= 0 && numero <= 10)
}

let media = (nota1 + nota2 + nota3)/3

alert(`A Média das notas obtidas é ${media}`)
