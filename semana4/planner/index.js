function addTask(){

    const task = document.getElementById('tarefa')
    const daysOfWeek = document.getElementById('dias-semana')
    const column = document.getElementById(daysOfWeek.value)
        console.log(task.value, daysOfWeek.value, column)

        if (task.value !== ''){
    column.innerHTML += `<p onclick ="endTask(this)">${task.value}</p>`
    task.value = ''
    } else{
        alert('Não é um elemento válido')
        
    }
} 

function endTask(todo){
    todo.style = "text-decoration: line-through" 
}

function clearAll(){
    const task = document.getElementById('tarefa')
    const days = document.getElementById('semana')
    const column = document.getElementById(days)
        
        column.innerHTML = `<p></p>`
        daysOfWeek.value = 'domingo'
}