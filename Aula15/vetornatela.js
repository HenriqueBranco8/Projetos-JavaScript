let valores = [0, 5, 15, 74, 97]
console.log(valores)

/*
for(let mostrar_vetor = 0; mostrar_vetor < valores.length; mostrar_vetor ++){
    console.log(`A posição ${mostrar_vetor} tem o valor ${valores[mostrar_vetor]}`)
}
*/

/*
for(let mostrar_vetor in valores){
    valores.length
    console.log(`A posição ${mostrar_vetor} tem o valor ${valores[mostrar_vetor]}`)
}
*/
let pos = valores.indexOf(85)
if(pos == -1){
    console.log('Valor não encontrado. Não existe esse valor dentro do vetor')
} else {
    pos = valores.indexOf(74)
    console.log(`O número 74 está na posição ${pos}`)
}
