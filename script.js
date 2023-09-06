const taskinput = document.getElementById("taskinput");
const addtaskbutton = document.getElementById("addtaskbutton");
const tasklist = document.getElementById("tasklist");

addtaskbutton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskinput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="deleteBtn">Delete</button>
  `;

  const deleteBtn = li.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", () => {
    tasklist.removeChild(li);
  });

  tasklist.appendChild(li);
  taskinput.value = "";
}
