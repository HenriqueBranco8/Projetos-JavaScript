function gerar_tabuada(){
    //Esse bloco vai conversar com HTML e vai puxar os inputs
    var num = document.getElementById('txtn')
    var tabuada = document.getElementById('seltabuada')

    //Esse bloco vai verificar se tem algum número, se não tiver vai aparecer o aviso
    if(num.value.length == 0){
        alert('Por favor, digite um número')


    //Se nãom ele vai fazer uma tabuáda
    } else { 
        var number = Number(num.value)
        var contador = 1
        seltabuada.innerHTML = ''
        while(contador <= 10){
            var item = document.createElement('option')
            item.text = `${number} x ${contador} = ${number * contador}`
            seltabuada.value = `tab${contador}`
            seltabuada.appendChild(item)
            contador ++
        }
    }
    
}