function populateTodoList(todos) {
  let list = document.getElementById('todo-list');
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: 'Wash the dishes', completed: false },
  { task: 'Do the shopping', completed: false },
];

//populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
// function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  // event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
// }

// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
// function deleteAllCompletedTodos() {
  // Write your code here...
// }
function populateTodoList(todos) {
  let list = document.getElementById('todo-list');

  
  list.innerHTML = '';

  todos.forEach((todo, index) => {
    let listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.textContent = todo.task;

    let badge = document.createElement('span');
    badge.className = 'badge bg-primary rounded-pill';

    let checkIcon = document.createElement('i');
    checkIcon.className = 'fa fa-check';
    checkIcon.setAttribute('aria-hidden', 'true');
    checkIcon.addEventListener('click', () => toggleCompletion(index));

    let trashIcon = document.createElement('i');
    trashIcon.className = 'fa fa-trash';
    trashIcon.setAttribute('aria-hidden', 'true');
    trashIcon.addEventListener('click', () => deleteTodo(index));

    badge.appendChild(checkIcon);
    badge.appendChild(trashIcon);

    listItem.appendChild(badge);

    if (todo.completed) {
      listItem.style.textDecoration = 'line-through';
    }

    list.appendChild(listItem);
  });
}


function addNewTodo(event) {

  event.preventDefault();


  let todoInput = document.getElementById('todoInput');
  let newTodoText = todoInput.value;

  
  if (newTodoText.trim() !== '') {
    
    todos.push({ task: newTodoText, completed: false });
    populateTodoList(todos);
    todoInput.value = '';
  }
}

function toggleCompletion(index) {
  todos[index].completed = !todos[index].completed;
  populateTodoList(todos);
}


function deleteTodo(index) {
  todos.splice(index, 1);
  populateTodoList(todos);
}
