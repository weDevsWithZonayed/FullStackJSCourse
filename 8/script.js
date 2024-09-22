const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  addTask();

  taskInput.value = "";
});

const addTask = () => {
  const li = document.createElement("li");
  const textDiv = document.createElement("div");
  textDiv.textContent = taskInput.value;
  textDiv.classList.add("task-text");
  li.appendChild(textDiv);

  const actionDiv = document.createElement("div");
  actionDiv.classList.add("task-actions");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });
  actionDiv.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  deleteBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit your task:");

    li.firstChild.textContent = newTask;
  });
  actionDiv.appendChild(editBtn);

  const completeCheckbox = document.createElement("input");
  completeCheckbox.type = "checkbox";
  completeCheckbox.addEventListener("change", () => {
    if (completeCheckbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  });
  actionDiv.appendChild(completeCheckbox);

  li.appendChild(actionDiv);
  taskList.appendChild(li);
};
