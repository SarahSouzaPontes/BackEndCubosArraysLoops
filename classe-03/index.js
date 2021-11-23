const numeros = [54, 22, 14, 87, 10, 284];

let encontrado=false;
for (let i = 0; i< numeros.length; i++){
    const item = numeros[i]
   
    if (item === ""){
console.log(`Está no índice ${i}`);
encontrado= true
breack
    }
}
if(!encontrado){
    console.log("Não encontrado, = -1")
}