import { Component } from '@angular/core';
import {getProjectData, getTasks, STATUS} from "../utils/projectData";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks = getTasks();
  status = STATUS;
}
