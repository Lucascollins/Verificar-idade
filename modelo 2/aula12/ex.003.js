var agora = new Date()
var diaSem = agora.getDay()
var horas = agora.getHours()
    /*
    0-Domingo
    1-Seginda
    2-Terça
    3-Quarta
    4-Quinta
    5-Sexta
    6-Sábado*/
if (horas <= 3) {
    console.log("Boa madrugada")
} else if (horas <= 12) {
    console.log("Boa Dia!")
} else if (horas <= 18) {
    console.log('Bom Tarde!')
} else {
    console.log("Boa Noite!")
}

switch (diaSem) {
    case 0:
        console.log('Hoje é Domingo!')
        break
    case 1:
        console.log('Hoje é Segunda!')
        break
    case 2:
        console.log('Hoje é Terça!')
        break
    case 3:
        console.log('Hoje é Quarta!')
        break
    case 4:
        console.log('Hoje é Quinta!')
        break
    case 5:
        console.log('Hoje é Sexta!')
        break
    case 6:
        console.log('Hoje é Sábado!')
        break
}