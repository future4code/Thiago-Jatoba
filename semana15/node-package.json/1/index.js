const yourName = process.argv[2]
const yourAge = process.argv[3]
const futureAge = Number(yourAge) + 7


console.log(`Olá, ${yourName}! Você tem ${yourAge} anos. Em sete anos você terá ${futureAge}`)

// console.log(process.argv[0])
// console.log(process.arg[v1])
// process.argv é um array de tds os argumentos de um processo onde:
// process.argv[0] SEMPRE É O PRÓPRIO NODE
// process.argv[1] SEMPRE VALE O QUE O ARQUIVO NODE IRÁ RODAR
// process.argv[0] e process.argv[1] SEMPRE ESTÃO SENDO USADOS
