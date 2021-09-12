var data = new Date()
var hora = data.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 3) {
    console.log('Boa Madrugada!')
} else if (hora <= 12) {
    console.log("Boa Dia!")
} else if (hora <= 18) {
    console.log('Bom Tarde!')
} else {
    console.log('Boa Noite!')
}