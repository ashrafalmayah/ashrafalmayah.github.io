

let taskInput = document.querySelector(".task-input");

let addTaskBtn = document.getElementById("add-task-btn");

let tasksContainer = document.querySelector(".tasks-container");

addTaskBtn.addEventListener('click' , function (){
    if(taskInput.value == "")return;
    let task = document.createElement('li');
    task.classList.add('task');

    let span = document.createElement('span');
    span.textContent = `${taskInput.value}`;

    taskInput.value = "";

    let checkTaskBtn = document.createElement('button');
    checkTaskBtn.innerHTML = '<i class ="fa-solid fa-check"></i>';
    checkTaskBtn.setAttribute('id', 'check-task-btn')

    let deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.innerHTML = '<i class ="fa-solid fa-trash"></i>';
    deleteTaskBtn.setAttribute('id', 'delete-task-btn');

    task.appendChild(span);
    task.appendChild(checkTaskBtn);
    task.appendChild(deleteTaskBtn);

    tasksContainer.appendChild(task);

    checkTaskBtn.addEventListener('click' , () => {
        checkTaskBtn.parentElement.style.textDecoration = 'line-through';
    });

    deleteTaskBtn.addEventListener('click' , () => {
        deleteTaskBtn.parentElement.remove();
    });
});