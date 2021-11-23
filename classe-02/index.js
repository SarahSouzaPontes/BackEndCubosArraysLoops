const letras = ["A", "a", "B", "C", "E", "e"];

let quantidade = 0

for(let letra of letras){
    if (letra === "E" || letra === "e"){
        quantidade++;
    }
}
console.log(`Tem ${quantidade} letras "E" e "e" nessas palavras`)