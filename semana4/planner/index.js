function addTask(){

    const task = document.getElementById('tarefa')
    const daysOfWeek = document.getElementById('dias-semana')
    const column = document.getElementById(daysOfWeek.value)
        console.log(task.value, daysOfWeek.value, column)

        if (task.value !== ''){
    column.innerHTML += `<p onclick ="endTask(this)">${task.value}</p>`
    task.value = ''
    daysOfWeek.value = 'domingo'
    } else{
        alert('Não é um elemento válido')
        
    }
} 

function endTask(tick){
    tick.style = "text-decoration: line-through" 
}

function clearAll(){
    const task = document.getElementById('tarefa')
    console.log(task)
    const daysOfWeek = document.getElementById('dias-semana')
    console.log(daysOfWeek)
    const column = document.getElementById(daysOfWeek.value)
    console.log(column)
        console.log(task.value, daysOfWeek.value, column)
        column.innerHTML = `<p></p>`
        daysOfWeek.value = 'domingo'
}

// function clearAll(){
//     const task = document.getElementById('tarefa')
//     const daysOfWeek = document.getElementById('dias-semana')
//     const dayOne = document.getElementById('domingo')
//     const dayTwo = document.getElementById('segunda')
//     const dayThree = document.getElementById('terca')
//     const dayFour = document.getElementById('quarta')
//     const dayFive = document.getElementById('quinta')
//     const daySix = document.getElementById('sexta')
//     const daySeven = document.getElementById('sabado')
//     const column1 = document.getElementById(dayOne.value)
//     const column2 = document.getElementById(dayTwo.value)
//     const column3 = document.getElementById(dayThree.value)
//     const column4 = document.getElementById(dayFour.value)
//     const column5 = document.getElementById(dayFive.value)
//     const column6 = document.getElementById(daySix.value)
//     const column7 = document.getElementById(daySeven.value)
    
//         console.log(task.value, daysOfWeek.value, dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven)
    
//         if (task.value !== ''){
//             switch (daysOfWeek.value){
//                 case dayOne:
//                     column1.innerHTML = `<p onclick ="endTask(this)">${task.value}</p>`
//                     break
//                 case dayTwo:
//                     column2.innerHTML = `<p onclick ="endTask(this)">${task.value}</p>`
//                     break
//                 case dayThree:
//                     column3.innerHTML = `<p onclick ="endTask(this)">${task.value}</p>`
//                     break
//                 case dayFour:
//                     column4.innerHTML = `<p onclick ="endTask(this)">${task.value}</p>`
//                     break
//                 case dayFive:
//                     column5.innerHTML = `<p onclick ="endTask(this)">${task.value}</p>`
//                     break
//                 case daySix:
//                     column6.innerHTML = `<p onclick ="endTask(this)">${task.value}</p>`
//                     break
//                 case daySeven:
//                     column7.innerHTML = `<p onclick ="endTask(this)">${task.value}</p>` 
//                     break
//                 default:
//                     break
//             }
//         }
// }