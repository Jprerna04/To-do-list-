let tasks = [];
function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        tasks.push(taskText);
        newTaskInput.value = '';
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const tasksContainer = document.getElementById('tasks');
    tasksContainer.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <span>${task}</span>
            <span class="delete-btn" onclick="deleteTask(${index})">&#10006;</span>
        `;
        tasksContainer.appendChild(taskElement);
    });
}

renderTasks();
