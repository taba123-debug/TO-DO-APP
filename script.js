function selectCategory(category) {
    document.getElementById('selected-category').innerHTML = category;
}
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    
    
    if (taskInput.value.trim() !== "") { 
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        
        taskInput.value = "";
        taskList.style.display = 'block';
    } else {
        alert("OPPS , NO ANY TASK ! Please enter a task :)"); 
    }
}


function removeTask() {
    const taskList = document.getElementById('task-list');
    
    if (taskList.lastChild) { 
        taskList.removeChild(taskList.lastChild); 
    } else {
        alert("No tasks to remove:=)"); 
    }
}
