/* calculo do IMC */
const nome = "Jardel"
const peso = 65
const altura = 1.64;

const IMC = (peso/(altura*altura))

if (IMC > 30) {
    console.log(`Atenção ${nome}, seu Imc ${IMC} indica que você está acima do peso`)
}
else{
   console.log(`Parabéns ${nome}, seu IMC ${IMC} indica que você não está acima do peso`)
}


