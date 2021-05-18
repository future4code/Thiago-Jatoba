const result = process.argv[2]
const numA = Number(process.argv[3])
const numB = Number(process.argv[4])
let colors = require('colors/safe')

if (result && numA && numB){
    if(result === "add"){
        console.log(colors.green(numA + numB))
    } else if (result === "sub"){
        console.log(colors.red(numA - numB))
    } else if (result === "mult"){
        console.log(colors.bgMagenta(numA * numB))
    }else if (result === "div"){
        console.log(colors.bgBlue(numA / numB))
    }
} else if (!numA || !numB){
    console.log("Apenas números são válidos!")
}