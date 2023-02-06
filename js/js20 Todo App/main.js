//add buttonunu dinle
// tiklandiginda inputu al
// yeni bit todo olustur
// ve bunu DOM un icine koy

{
  /* <li class="todoItem">
<button class="completeButton">Complete</button>
<button class="deleteButton">Delete</button>
<p class="todoText">Test something</p>
</li>
<li class="todoItem completed">
<button class="completeButton">Complete</button>
<button class="deleteButton">Delete</button>
<p class="todoText">Test something</p>
</li> */
}

const addTaskButton = document.querySelector(".addTask");
const todoInput = document.querySelector(".todoInput");
const todosContainer = document.querySelector(".todos");

console.log(addTaskButton, todoInput);

const renderTodoItem = (todoText) => {
  const todoItemElement = document.createElement("li");
  todoItemElement.classList.add("todoItem");
  // todoItemElement.innerText = todoText;

  const completeButton = document.createElement("button");
  completeButton.classList.add("completeButton");
  completeButton.innerText = "Complete";
  todoItemElement.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerText = "Delete";
  todoItemElement.appendChild(deleteButton);

  const textElement = document.createElement("p");
  textElement.innerText = todoText;
  todoItemElement.appendChild(textElement);

  todosContainer.appendChild(todoItemElement);
  todoInput.value = "";
  todoInput.focus();
};

const addTask = () => {
  if (todoInput.value === "") {
    alert("Input cannot be empty!");
  } else {
    renderTodoItem(todoInput.value);
  }
  console.log(todoInput.value);
};
addTaskButton.addEventListener("click", addTask);
