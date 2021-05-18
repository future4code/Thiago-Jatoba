const yourName = process.argv[2]
const yourAge = Number(process.argv[3])
const futureAge = Number(yourAge) + 7

if (!yourAge){
    console.log("Insira um número válido em sua idade")
}else{
    console.log(`Olá, ${yourName}! Você tem ${yourAge} anos. Em sete anos você terá ${futureAge}`)
}