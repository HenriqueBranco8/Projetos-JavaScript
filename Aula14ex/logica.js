function contar(){
    //Esse bloco puxar o input do HTML para o JS manipular as informações do input 'ínicio'
    var valorinicio = document.getElementById('inicio')
    var inicio = Number(valorinicio.value)

    //Esse bloco puxar o input do HTML para o JS manipular as informações do input 'Fim'
    var valorfim = document.getElementById('Fim')
    var fim = Number(valorfim.value)

    var res = document.getElementById('res')
    res.innerHTML = `${inicio} e ${fim}`

    for()
}