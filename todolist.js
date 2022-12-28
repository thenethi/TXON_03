let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");

let todoList = [{
        text: "Programming",
        uniqueNo: 1
    },
    {
        text: "Drinking Water",
        uniqueNo: 2
    },
    {
        text: "Exercise",
        uniqueNo: 3
    }
];

addTodoButton.onclick = function() {
    onAddTodo();
}

function onTodoStatusChange(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");
}

function ondeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}

function createandAppendTODO(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);
    todoElement.id = todoId;

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);
    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId);
    };

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);
    labelElement.id = labelId;

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        ondeleteTodo(todoId);
    }
    deleteIconContainer.appendChild(deleteIcon);
}

function onAddTodo() {
    let todosCount = todoList.length;
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }
    todosCount = todosCount + 1;
    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount
    }
    createandAppendTODO(newTodo);
    userInputElement.value = "";
}
for (let eachTodo of todoList) {
    createandAppendTODO(eachTodo);
}
