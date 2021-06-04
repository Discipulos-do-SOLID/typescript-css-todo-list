import Task from "./Task";


class TaskService {
  public static addTask(taskText: string): void {

    let task = new Task(taskText);
    
    let allTasks = this.getAll();
    allTasks.push(task);
    
    window.localStorage.setItem("tasks", JSON.stringify(allTasks))
  }

  public static getAll(): Task[] {
    let undecodedTasks = window.localStorage.getItem("tasks");

    if (!undecodedTasks) {
      return [];
    }
    let tasks = JSON.parse(undecodedTasks);

    return tasks;
  }

  public static delete(id: string) : void {
      let tasks = this.getAll();
      let allTasks = tasks.filter(task => task.id != id);
      window.localStorage.removeItem("tasks")
      window.localStorage.setItem("tasks", JSON.stringify(allTasks))
  }
}

export default TaskService;
