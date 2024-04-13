function resposta(){
/*criação de função para criar eventos*/

var data = new Date()
var ano = data.getFullYear()
/*agora vamos usar o comando get e extrai o ano da variável*/

var fy = document.querySelector('input#texto_ano')
/*pegamos uma variável para pegar o id do input texto_ano*/

var tt = document.querySelector('div#tot')
/*pegamos também uma variável para pegar o id da div tot*/ 

var fotos = document.querySelector('div#fotos')

if (fy.value.length == 0 || Number(fy.value) > ano){

    window.alert('favor, verificar os dados e tentar novamente')

} else {

    /*agora vamos criar uma variável para pegar o sexo*/

    var ebs = document.getElementsByName('k-sex')

    /*outra para calcular o ano*/

    var id = ano - Number(fy.value)

    /*agora modificamos exatamente o texto html mostrando*/

    /*criação de modelo para selecionar e mostrar o sexo*/

    var gen = ''

    /*criaremos uma variável para a imagem e um ID*/

    var tf = document.createElement('img')
    tf.setAttribute('id', 'foto')

    /*usamos dois comandos importantes a serem anotados*/

    if (ebs[0].checked) {

    gen = 'masculino'

    if (id >=0 && id <10) {

        //kid
        tf.setAttribute('src', 'img_idades/bb-masc.jpg')

    } else if (id < 21) {

        //aborrecente
        tf.setAttribute('src', 'img_idades/young-boy.jpeg')

    } else if (id < 50) {

        //adultero
        tf.setAttribute('src', 'img_idades/adult-menc.jpg')

    } else {


        //veio
        tf.setAttribute('src', 'img_idades/old-man.jpg')

    }


    } else if (ebs[1].checked) {

    gen = 'feminino'
    
    if (id >=0 && id <10) {

        //kid
        tf.setAttribute('src', 'img_idades/bb-fem.jpg')
        

    } else if (id < 21) {

        //aborrecente
        tf.setAttribute('src', 'img_idades/young-girl.jpg')

    } else if (id < 50) {

        //va e adultera
        tf.setAttribute('src', 'img_idades/adult-girl.png')

    } else {

        //veia
        tf.setAttribute('src', 'img_idades/old-woman.jpg')

    }

    }

    tt.style.textAlign = 'center'
    tt.innerHTML = `Você é do gênero ${gen} e têm ${id} anos`
    fotos.appendChild(tf)

}



}