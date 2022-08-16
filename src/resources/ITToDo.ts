export interface IToDo {
  text: string;
  completed: boolean;
  date: string;
  id?: string;
  deadline?: Date;
  notes?: string;
  priority?: string;
  dlMilisTime?: number;
}
