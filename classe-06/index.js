const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
//Declare um array com alguns números inteiros quaisquer.Depois, percorra este array e calulcule a soma dos números pares presentes nesse array.
//Exemplo:Para o array **numeros** abaixo```javascript= const numeros = [3, 4, 7, 8, 1, 6, 5, 10];


const arrayPar = []
let soma = 0

for(let item of numeros){
    if((item % 2) === 0){
        arrayPar.push(item)
        soma += item
    }
}
    console.log (soma)