import TaskInterface from './TaskInterface'
import {v4 as uuidv4} from 'uuid'

class Task implements TaskInterface  {

  public text: string;
  public isDone = false;
  public id = uuidv4()
  constructor(text: string) {
    this.text = text;
  }
  
  public toggleDone(): void {
    this.isDone = !this.isDone;
  }

}

export default Task;