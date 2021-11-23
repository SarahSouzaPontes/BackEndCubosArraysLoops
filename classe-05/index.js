const original = [1, 4, 12, 21, 53, 88, 112];
const arrayPar = []

for(let item of original){
    if((item % 2) === 0){
        arrayPar.push(item)
    }
}
    console.log(arrayPar)
