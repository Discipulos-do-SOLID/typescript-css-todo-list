import TaskService from "./TaskService";

export function renderAllTasks() {
  let tasks = TaskService.getAll();

  let templateTask = document.getElementById(
    "template-task"
  ) as HTMLTemplateElement;

  let containerTasks = document.getElementById("all-tasks");

  if (containerTasks) {
    containerTasks.innerHTML = "";
    containerTasks.prepend(templateTask);
  }

  tasks.forEach((task) => {
    let node = templateTask?.content.cloneNode(true)! as Element;
    let pElement = node.querySelector("p")!;
    let deleteElement = node.querySelector("img")!;

    pElement.innerText = task.text;
    deleteElement.id = task.id;

    containerTasks?.appendChild(node);
    deleteElement?.addEventListener("click", deleteTask);
  });
}

export function addTask(e: Event) {
  e.preventDefault();

  let input = document.getElementById("task") as HTMLInputElement;
  let taskText = input?.value;

  if (taskText === "" || taskText === undefined) {
    throw new Error("Você precisa informar uma task");
  }

  TaskService.addTask(taskText);

  input.value = "";
  renderAllTasks();
}

function deleteTask(e: Event) {
  let imgElement = e?.target as HTMLImageElement;
  let id = imgElement.id;

  TaskService.delete(id);
  renderAllTasks();
}
