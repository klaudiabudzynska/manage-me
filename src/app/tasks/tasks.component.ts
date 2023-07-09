import { Component } from '@angular/core';
import {getTasks, STATUS} from "../utils/projectData";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks = getTasks();
  boardColumns = [
    {
      name: 'To Do',
      status: STATUS.ToDo
    },
    {
      name: 'Doing',
      status: STATUS.Doing
    },
    {
      name: 'Done',
      status: STATUS.Done
    },
  ]
}
