// let formEl = document.querySelectorAll('input');
// let divEl = document.querySelectorAll('div');
// let arr = [];
// function submitButton() {
//     arr.push(formEl[0].value);
//     console.log(arr);
//     allFormEl();
//     formEl[0].value = '';
// }
// function allFormEl() {
//     for (let i = 0; i < arr.length; i++) {
//         divEl[1].innerHTML += '<p>' + arr.length + '</p>';
//     }

// }































let todoInput = document.querySelectorAll('.new-todo');
let todoListDiv = document.querySelectorAll('.todo-list');
let allTodos = [];

function add() {
    let todoVal = todoInput[0].value;
    allTodos.push(todoVal);
    printAllTodos();
    todoInput[0].value = '';
}

function printAllTodos() {
    todoListDiv[0].innerHTML = "";
    for (let i = 0; i < allTodos.length; i++) {
        todoListDiv[0].innerHTML +=
            `<p>
        ${allTodos[i]}
        <button onclick="editButton()">Edit</button>
        <button onclick="deleteButton()">Delete</button>
        </p>`;
    }
}

function editButton() {
    console.log('Edit');
}

function deleteButton() {
    console.log('Delete');
}