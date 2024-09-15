
function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("TODOS")) || {"todoList" : []};
    return todos;
}

function addTodoToLocalStorage(todoText) {
    const todos = loadTodos();
    todos.todoList.push(todoText);
    localStorage.setItem("TODOS", JSON.stringify(todos));
}

function appendTodoInHTML(todoText) {
    const taskList = document.getElementById("taskList");

    const newTodo = document.createElement("li");
    newTodo.classList.add("newTodo") // this create class names of our li tags created using javascript (not html)
    const textDiv = document.createElement("div");
    textDiv.textContent = todoText;
    newTodo.appendChild(textDiv);
    
    const wrapper = document.createElement("div");
    wrapper.classList.add("todoButtons");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.classList.add("completeBtn");

    wrapper.appendChild(editBtn);
    wrapper.appendChild(deleteBtn);
    wrapper.appendChild(completeBtn);
    newTodo.appendChild(wrapper);
    taskList.appendChild(newTodo);
}

document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todoInput");
    const submitBtn = document.getElementById("addTodo");
    const taskList = document.getElementById("taskList");

    submitBtn.addEventListener("click", () => {
        const todoText = todoInput.value;
        if(todoText == '') {
            alert("Please write something for the todo");
        } else {
            addTodoToLocalStorage(todoText);
            appendTodoInHTML(todoText);
            todoInput.value = '';
        }
    });

    todoInput.addEventListener("change", () => {
        // This call back method is fired everytime there is a change in the input tag
        const todoText = todoInput.value;
        todoText.trim();
        console.log(todoText); // this line is written to show what task is added in the console
    });

    const todos = loadTodos();

    todos.todoList.forEach((todo) => {
        appendTodoInHTML(todo);
    })
});