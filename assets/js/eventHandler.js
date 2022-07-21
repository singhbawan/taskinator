var add_task = function() {
    
    var taskItemEl = document.createElement("li");
    taskItemEl.classList.add("task-item");
    taskItemEl.textContent = "new task";
  
    var listEl = document.getElementById("tasks-to-do");
    listEl.appendChild(taskItemEl);
  }
  

