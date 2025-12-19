function verificar(){

//Essas duas variáveis pegam data atual e guarda a data do usuário
    var data = new Date()
    var anoatual = data.getFullYear()

    //Essas variáveis se comunicam com HTML para 
    var formularioano = document.getElementById('txtano')
    var res = document.getElementById('res')

// O comando lenght verifica se tem algum valor ou o ano é muito avançado, passando do ano atual. Esse if é para verificar isso. 
    if (formularioano.value.length == 0 || formularioano.value > anoatual){
        alert('ERRO! Verifique os dados novamente')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = anoatual - Number(formularioano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        genero = 'Maculino'
        if(idade >=0 && idade < 12){
            //criança
        } else if (idade >= 12 && idade < 18){
             //adolecente
        }else if (idade >= 18 && idade < 64){
            //adulto
        } else {
            //idoso
        }

    } else if(fsex[1].checked){
        genero = 'Feminino'
        if(idade >=0 && idade < 12){
            //criança
        } else if (idade >= 12 && idade < 18){
             //adolecente
        }else if (idade >= 18 && idade < 59){
            //adulto
        } else {
            //idoso
        }
    }
    res.innerHTML = `Você tem ${idade} ano e é do gênero ${genero}`
}
}