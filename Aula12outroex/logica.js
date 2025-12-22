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
    //pega a opção selecionada pelo usuário (Maculino ou feminino)
    var fsex = document.getElementsByName('radsex')

    //Diminui o ano atual com o ano colocado
    var idade = anoatual - Number(formularioano.value)

    //Vai escrever o genero da pessoa no HTML
    var genero = ''
    
    //Esse bloco Cria uma imagem pelo JS (JavaScript) e configura o estilo dela
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.style.borderRadius = '500px'
    img.style.display = 'block'
    img.style.margin = '20px auto'
    img.style.width = '330px'
    img.style.height = '280px'
    

    //Se a opção selecionada for masculina vai executar esse bloco
    if(fsex[0].checked){
        genero = 'Maculino'
        if(idade >=0 && idade < 12){
            //criança
            img.setAttribute('src', 'imgs/homem-crianca.jpg')
        } else if (idade >= 12 && idade < 18){
             //adolecente
            img.setAttribute('src', 'imgs/itme.jpeg')
        }else if (idade >= 18 && idade < 64){
            //adulto
            img.setAttribute('src', 'imgs/homen-adulto.jpeg')
        } else {
            //idoso
            img.setAttribute('src', 'imgs/homen-idoso.jpg')
        }

    //Se a opção selecionada for feminina vai executar esse bloco
    } else if(fsex[1].checked){
        genero = 'Feminino'
        if(idade >=0 && idade < 12){
            //criança
            img.setAttribute('src', 'imgs/criança-menina.jpg')
        } else if (idade >= 12 && idade < 18){
             //adolecente
             img.setAttribute('src', 'imgs/adolecente-mulher.jpg')
        }else if (idade >= 18 && idade < 59){
            //adulto
            img.setAttribute('src', 'imgs/mulher-adulta.jpeg')
        } else {
            //idoso
            img.setAttribute('src', 'imgs/idosa.jpg')
        }
    }

    //Escreve o resultado de tudo no HTML
    res.style.textAlign ='center'
    res.innerHTML = `Você tem ${idade} anos e é do gênero ${genero}`
    res.appendChild(img)
}
}