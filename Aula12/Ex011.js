var idade = 18

if(idade < 16){
    console.log(`Você tem ${idade} anos, não vota ainda.`)
} else if(idade >= 16 && idade < 18 || idade >= 65){
        console.log(`Você tem ${idade} anos, o seu voto é opcional.`) 
} else{
        console.log(`Você tem ${idade} anos, seu voto é OBRIGATÓRIO!`)
}