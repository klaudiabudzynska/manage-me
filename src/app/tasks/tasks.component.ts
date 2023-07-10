import { Component } from '@angular/core';
import {ProjectDataService, STATUS, Task} from "../project-data.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [ProjectDataService]
})
export class TasksComponent {
  tasks: Task[];
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

  constructor(private projectDataService: ProjectDataService) {
    this.tasks = projectDataService.getTasks();
  }
}
