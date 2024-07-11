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

      const textDiv = document.createElement('div');
      textDiv.textContent = task;
      textDiv.classList.add('task-text');
      li.appendChild(textDiv);

      const actionDiv = document.createElement('div');
      actionDiv.classList.add('task-actions');
      li.appendChild(actionDiv);
  
      // now place a delete button with its own event listener
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
      });
      actionDiv.appendChild(deleteBtn);
  
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.classList.add('edit-btn');
      editBtn.addEventListener('click', function() {
        const newTask = prompt('Edit your task:', task);
        if (newTask !== null) {
          li.firstChild.textContent = newTask;
        }
      });
      actionDiv.appendChild(editBtn);
  
      const completeCheckbox = document.createElement('input');
      completeCheckbox.type = 'checkbox';
      completeCheckbox.addEventListener('change', function() {
        if (completeCheckbox.checked) {
          li.classList.add('completed');
        } else {
          li.classList.remove('completed');
        }
      });
      actionDiv.appendChild(completeCheckbox);
  
      taskList.appendChild(li);
    }
  });
  