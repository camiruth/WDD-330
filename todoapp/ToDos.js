const taskInput = document.querySelector(".task-input input");
const buttonInput = document.querySelector(".task-input button");
const all = document.querySelector("#all");
const active = document.querySelector("#active");
const completed = document.querySelector("#completed");
const tasksLeft = document.querySelector("#tasksLeft");
taskBox = document.querySelector(".task-box");

//getting localstorage todo-list
let todos = JSON.parse(localStorage.getItem("todo-list"));
let filterType = 'all';

function showTodo() {
    let li = "";
    let filteredTodos = [];
    if(filterType === 'all'){
        filteredTodos = todos;
    }
    if(filterType === 'active'){
        filteredTodos = todos.filter((todo) => todo.status === 'active');
    }
    if(filterType === 'completed'){
        filteredTodos = todos.filter((todo) => todo.status === 'completed');
    }
    if (filteredTodos) {
        filteredTodos.forEach((todo, id) => {
            // if todo status is completed, set the isCompleted value to checked
            let isCompleted = todo.status == "completed" ? "checked" : "";
            li += `<li class="task">
                    <label for="${id}">
                        <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
                        <p class="${isCompleted}">${todo.name}</p>
                    </label>
                    <div class="settings">
                        <button type="button" onclick="deleteTask(${id})">X</button>
                    </div>
                </li>`;
        });
    }
    taskBox.innerHTML = li;

    let activeTasksLeft = 0;
    for(let i = 0; i < todos.length; i++){
        if(todos[i].status === 'active'){
            activeTasksLeft++;
        }
    } 
    tasksLeft.innerHTML = `${activeTasksLeft} tasks left`;
}
showTodo();

function deleteTask(id) {
    todos.splice(id, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo();
}

function updateStatus(selectedTask) {
    //getting paragraph that contains task name
    let taskName = selectedTask.parentElement.lastElementChild;
    if(selectedTask.checked){
        //updating the status of selected task to completed
        todos[selectedTask.id].status = "completed";
    } else {
        //updating the status of selected task to active
        todos[selectedTask.id].status = "active";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo();
}

function addTask(e) {
    let userTask = taskInput.value.trim();
    if (e.key == "Enter" || e.type === 'click' && userTask) {

        if (!todos) { //if todos does not exist, pass an empty array to todos
            todos = [];
        }
        taskInput.value = "";
        let taskInfo = {
            name: userTask,
            status: "active"
        };
        todos.push(taskInfo); //adding new tasks todo
        localStorage.setItem("todo-list", JSON.stringify(todos));
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
