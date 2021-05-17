const result = process.argv[2]
const numA = Number(process.argv[3])
const numB = Number(process.argv[4])

if (result && numA && numB){
    if(result === "add"){
        console.log(numA + numB)
    } else if (result === "sub"){
        console.log(numA - numB)
    } else if (result === "mult"){
        console.log(numA * numB)
    }else if (result === "div"){
        console.log(numA / numB)
    }
} else if (!numA || !numB){
    console.log("Apenas números são válidos!")
}