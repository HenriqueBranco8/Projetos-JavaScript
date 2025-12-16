var atual = new Date()
var hora = atual.getHours()
if (hora < 12 && hora >= 6){
    console.log(`Bom dia, agora são ${hora} horas`)
} else if (hora >= 12 && hora < 18){
    console.log(`Boa tarde, agora são ${hora} horas`)
} else if (hora >= 18){
    console.log(`Boa noite, agora são ${hora} horas`)
} else if (hora >= 0 && hora < 6){
    console.log(`Boa madrugrada, agora são ${hora} horas`)
}