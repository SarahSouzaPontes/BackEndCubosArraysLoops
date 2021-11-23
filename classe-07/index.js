const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const arrayNomesA = []



for(let item of nomes){
    if( item[0] == 'A' || item[0] =='a'){
        arrayNomesA.push(item)
        console.log(item[0])
    }
}
    
console.log(arrayNomesA)
