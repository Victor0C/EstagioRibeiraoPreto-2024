const suaString = 'abcde' // coloque aqui a string que será invertida

function inverterString(stringUsuario){
    const vetorString = stringUsuario.split("")
    let vetorNovaString = []
    for(let i = vetorString.length ; i >= 0; i--){
        vetorNovaString.push(vetorString[i])
    }
     return vetorNovaString.join("")
}
console.log(inverterString(suaString))