export default interface TaskInterface {
  id: string;
  isDone: boolean;
  text: string;
  toggleDone(): void;
}
