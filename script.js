const taskList = document.querySelector(".task-list");
const input=document.querySelector("input");
const addBtn=  document.querySelector("button");

console.log("js is connected");

// for creation of a new task

addBtn.addEventListener("click", () =>{
  const taskText=input.value.trim();
  console.log("Task entered:", taskText);  // DEBUG
  if (taskText==='') {
    console.log("Empty input, nothing added.");  // DEBUG
    return
  };

  const li=document.createElement("li");
  console.log("Created li:", li); // DEBUG

  // const taskSpan=document.createElement("span");
  // taskSpan.textContent=taskText;
  // taskSpan.classList.add("task-text");

  // taskSpan.addEventListener("click", () => {
  // taskSpan.classList.toggle("completed");
  // });

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("task-checkbox");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.classList.add("task-text");

// Toggle "completed" when checkbox is clicked
  checkbox.addEventListener("change", () => {
    taskSpan.classList.toggle("completed", checkbox.checked);
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");

  li.appendChild(checkbox);
  li.appendChild(taskSpan);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

});


//to edit and delete

taskList.addEventListener("click", (e) => {
  const target = e.target;
  const li = target.closest("li");

  if (target.classList.contains("delete")) {
    li.remove(); 
  }

  if (target.classList.contains("edit")) {
    const taskSpan = li.querySelector(".task-text");
    const newTask = prompt("Edit your task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      taskSpan.textContent = newTask.trim(); 
    }
  }
});