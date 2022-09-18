function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res= document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert( '[ERRO] verifique os dados e tente novamente!')
 } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano- Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute( 'id','foto')
           if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 6) {
                //Bebe-m
                img.setAttribute('src' , 'foto-m-bebe.jpg')    
            } else if (idade < 12){
                //Criança
                img.setAttribute('src' , 'foto-Menino.jpg' )
            } else if (idade <18){
                //Adolescente
                img.setAttribute('src' , 'foto-m-adolescente.jpg')

            }  else if (idade < 29){
                //jovem
                img.setAttribute('src' , 'foto-m-jovem.jpg')

            } else if (idade < 55){
                //Adulto
                img.setAttribute('src' , 'foto-Adulto.jpg')
            } else{
                // Idoso
                img.setAttribute('src' , 'foto-Idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero= 'Mulher'
            if (idade >=0 && idade <6){
             //bebe-f
             img.setAttribute('src' , 'foto-f-bebe.jpg')

            } else if( idade < 12) {
                //Criança
                img.setAttribute('src' , 'foto-menina.jpg')

            } else if (idade <18) {
                //Adolescente
                img.setAttribute('src' , 'foto-f-adolescente.jpg')

            } else if (idade <29){
                //jovem
                img.setAttribute('src' , 'foto-f-Jovem.jpg')

            } else if (idade < 55){
                // Adulto
                img.setAttribute('src' , 'foto-Adulta.jpg')
            } else {
                //Idoso
                img.setAttribute('src' , 'foto-idosa.jpg')
            }
        }

            res.style.textAlign = 'center' 
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
            res.appendChild(img)
           
        }  

 }