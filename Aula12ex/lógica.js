function carregar(){
var hora = new Date()
var guardahoracliente = hora.getHours()
var escrevehora= document.querySelector('div#escrevehora')
var addimgs = document.getElementById('imagem')


if (guardahoracliente < 12 && guardahoracliente >= 6){
    escrevehora.innerHTML = `Agora são ${guardahoracliente} horas da manhã`
    document.body.style.background = '#ffd88c'
    addimgs.src = 'img/manha-full.jpg'


} else if(guardahoracliente >= 12 && guardahoracliente < 18){
    escrevehora.innerHTML = `Boa Tarde! Agora São ${guardahoracliente} horas`
    document.body.style.background = '#d07009'
    addimgs.src = 'img/tarde-full.jpg'


} else if(guardahoracliente >= 18 && guardahoracliente <= 23){
    escrevehora.innerHTML = `Noite Boa! Agora são ${guardahoracliente} horas da noite`
    document.body.style.background = '#191d78'
    addimgs.src = `img/noite-full.jpg`


} else if(guardahoracliente >= 0 && guardahoracliente < 6){
    escrevehora.innerHTML = `Vai dormir campeão já são ${guardahoracliente} da madrugada. Ela não vai te ligar`
    document.body.style.background = '#ac5a11'
    addimgs.src = `img/madrugada.jpg`


}

}   