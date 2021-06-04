import {addTask, renderAllTasks} from "./HtmlService";

// Registrar o Botão ADD (html) com Event Listener
let form = document.getElementById("form-add-task");
form?.addEventListener("submit", addTask);

renderAllTasks();
