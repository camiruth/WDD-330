import { taskInput, buttonInput, all, active, completed, tasksLeft, taskBox } from "./utilities.js";
import { getTodos, setTodos } from "./ls.js";

let filterType = 'all';

const updateStatus = (selectedTask) => {
    const todos = getTodos();
    //getting paragraph that contains task name
    let taskName = selectedTask.parentElement.lastElementChild;
    if(selectedTask.checked){
        //updating the status of selected task to completed
        todos[selectedTask.id].completed = true;
    } else {
        //updating the status of selected task to active
        todos[selectedTask.id].completed = false;
    }
    setTodos(todos);
    showTodo();
};

function deleteTask(id) {
    const todos = getTodos();
    todos.splice(id, 1);
    setTodos(todos);
    showTodo();
}

function showTodo() {

    let li = "";
    const todos = getTodos();
    let filteredTodos = [];
    if(filterType === 'all'){
        filteredTodos = todos;
    }
    if(filterType === 'active'){
        filteredTodos = todos.filter((todo) => todo.completed === false);
    }
    if(filterType === 'completed'){
        filteredTodos = todos.filter((todo) => todo.completed === true);
    }
    if (filteredTodos) {
        filteredTodos.forEach((todo, id) => {
            // if todo status is completed, set the isCompleted value to checked
            let isCompleted = todo.completed ? "checked" : "";
            li += `<li class="task">
                    <label for="${id}">
                        <input class="status-checkbox" type="checkbox" id="${id}" ${isCompleted}>
                        <p class="${isCompleted}">${todo.content}</p>
                    </label>
                    <div class="settings">
                        <button class="delete-button" type="button">X</button>
                    </div>
                </li>`;
        });
    }
    taskBox.innerHTML = li;

    let activeTasksLeft = 0;
    for(let i = 0; i < todos.length; i++){
        if(todos[i].completed === false){
            activeTasksLeft++;
        }
    } 
    tasksLeft.innerHTML = `${activeTasksLeft} tasks left`;

    const checkboxes = document.querySelectorAll(".status-checkbox");
    checkboxes.forEach(function(element) {
        element.addEventListener("click", function(e) {
            updateStatus(e.target);
        });
    });

    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(function(element, id) {
        element.addEventListener("click", function(e) {
            deleteTask(id);
        });
    });
}
showTodo();

function addTask(e) {
    const todos = getTodos();
    let userTask = taskInput.value.trim();
    if (e.key == "Enter" || e.type === 'click' && userTask) {

        if (!todos) { //if todos does not exist, pass an empty array to todos
            todos = [];
        }
        taskInput.value = "";
        let taskInfo = {
            id: Date.now(),
            content: userTask,
            completed: false
        };
        todos.push(taskInfo); //adding new tasks todo
        setTodos(todos);
        showTodo();
    }
}

//adding a task
taskInput.addEventListener("keyup", e => {
    addTask(e);
})
buttonInput.addEventListener("click", e => {
    addTask(e);
})

//filter controls
all.addEventListener("click", e => {
    filterType = 'all';
    all.className = 'border';
    active.className = '';
    completed.className = '';
    showTodo();
})
active.addEventListener("click", e => {
    filterType = 'active';
    all.className = '';
    active.className = 'border';
    completed.className = '';
    showTodo();
})
completed.addEventListener("click", e => {
    filterType = 'completed';
    all.className = '';
    active.className = '';
    completed.className = 'border';
    showTodo();
})
