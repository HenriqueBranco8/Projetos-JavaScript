function contar(){
    //Esse bloco puxar os inputs do HTML e vai guardar as informações
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('Fim')
    var passo = document.getElementById('Passo')


    //Vai escrever no HTML através do JS
    var res = document.getElementById('res')
    
    //Esse bloco vai avisar se os inputs não estiver preenchido. Vai aparecer uma mensagem de erro
    if(inicio.value.length == 0 || fim.value.length == 0){
        res.innerHTML = 'Impossível de contar'

        //Se não estiver vazio os inputs, esse bloco vai pegar os valores dos inputs.
    }   else {
        res.innerHTML = 'Contando: <br>'
        var valorinicio = Number(inicio.value)
        var varlorfim = Number(fim.value)
        var valorpasso = Number(passo.value)

        //Se não tiver valor no input de passo, ele vai considerar que o passo seja 1, e vai executar.
        if(valorpasso <= 0){
            alert('Passo inválido! Considerando Passo 1')
            valorpasso = 1
        }

        //Se o valor do inicio for menor que o do fim, vai começar uma contagem crescente.
        if(valorinicio < varlorfim){
            //Vai declaras uma variável que vai guardar o valor do inicio, se o valor dessa variável for menor ou igual ao fim, então vai acrescentar um ao resultado do passo e vai aparecer na tela.
            for(var contador = valorinicio; contador <= varlorfim; contador += valorpasso){
                res.innerHTML += `${contador} \u{1F3C1}`
            }

            //Se o contador for maior que o valor do fim ele vai fazer uma contagem regressiva
        } else{
            for(contador = valorinicio; contador >= varlorfim; contador -= valorpasso){
                res.innerHTML += `${contador} \u{1F3C1}`
            }
        }
    }
    res.innerHTML += `\u{1F3C1}`

}