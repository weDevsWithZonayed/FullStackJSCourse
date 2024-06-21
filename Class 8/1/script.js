document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Event listener for adding a task
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      addTask(taskInput.value);
      taskInput.value = '';
    });
  
    // Function to add a task
    function addTask(task) {
      const li = document.createElement('li');
      li.textContent = task;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
      });
  
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.classList.add('edit-btn');
      editBtn.addEventListener('click', function() {
        const newTask = prompt('Edit your task:', task);
        if (newTask !== null) {
          li.firstChild.textContent = newTask;
        }
      });
  
      const completeCheckbox = document.createElement('input');
      completeCheckbox.type = 'checkbox';
      completeCheckbox.addEventListener('change', function() {
        if (completeCheckbox.checked) {
          li.classList.add('completed');
        } else {
          li.classList.remove('completed');
        }
      });
  
      li.appendChild(completeCheckbox);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }
  });
  