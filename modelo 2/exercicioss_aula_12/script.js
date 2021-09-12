var butao = document.getElementById("botam")
butao.addEventListener("click", verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var num = document.getElementById("txtnum")
    var res = document.querySelector("div#res")
    if (num.value.length == 0 || Number(num.value > ano)) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(num.value)
        console.log(idade)
        res.innerHTML = `Idade calculada ${idade}`
        var genro = ''
        var img = document.createElement("img")
        img.setAttribute("id", "photo")
        if (fsex[0].checked) {
            genro = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criaça
                img.setAttribute("src", "BorutoChild.png")
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "KibaYoung.jfif")
            } else if (idade < 50) {
                //Adult
                img.setAttribute("src", "NarutoAdult.jpg")
            } else {
                //Idoso
                img.setAttribute("src", "JiraiyaOld.jpeg")
            }

        } else if (fsex[1].checked) {
            genro = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "Sarada.jfif")
            } else if (idade < 21) {
                //Jovem
                img.setAttribute("src", "SakuraYoung.png")
            } else if (idade < 50) {
                //Adult
                img.setAttribute("src", "InoAdult.jpg")
            } else {
                //Idoso
                img.setAttribute("src", "ChiyoOld.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genro} com ${idade} anos.`
        res.appendChild(img)
    }
}