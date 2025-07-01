const input = document.getElementById("input-bar");
const addBtn = document.getElementById("add-btn");
const taskList = document.querySelector(".task-list");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");

  const label = document.createElement("label");
  label.classList.add("custom-checkbox");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("task-checkbox");

  const customCircle = document.createElement("span");

  label.appendChild(checkbox);
  label.appendChild(customCircle);

  const taskSpan = document.createElement("span");
  taskSpan.classList.add("task-text");
  taskSpan.innerHTML = taskText;

  const doneTag = document.createElement("span");
  doneTag.classList.add("done-tag");
  doneTag.textContent = ""; 

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.textContent = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "Delete";

  li.appendChild(label);
  li.appendChild(taskSpan);
  li.appendChild(doneTag);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  input.value = "";

  checkbox.addEventListener("change", () => {
    taskSpan.classList.toggle("completed", checkbox.checked);
    doneTag.textContent = checkbox.checked ? "Done" : "";
  });

  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit your task:", taskSpan.innerHTML);
    if (newText !== null && newText.trim() !== "") {
      taskSpan.innerHTML = newText.trim();
    }
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
});
