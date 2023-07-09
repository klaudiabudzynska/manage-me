import { Component } from '@angular/core';
import {Feature, ProjectDataService, STATUS, Task} from "../project-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-task-operation',
  templateUrl: './task-operation.component.html',
  styleUrls: ['./task-operation.component.scss'],
  providers: [ProjectDataService]
})
export class TaskOperationComponent {
  task: Task | undefined
  features: Feature[]
  newTaskName: string
  statuses = STATUS
  newStatus: STATUS
  newFeature: number | undefined
  newDescription: string

  constructor(private route: ActivatedRoute, private projectDataService: ProjectDataService) {

  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.task = this.projectDataService.getTasks().find(task => task.id === parseInt(params['id']));

        if (!this.task) {
          return;
        }

        this.newTaskName = this.task.name;
        this.newStatus = this.task.status;
        this.features = this.projectDataService.getProjectData();
        this.newFeature = this.projectDataService.getFeatureOfTask(this.task.id)?.id;
        this.newDescription = this.task.description;
      }
    );
  }

  handleSave() {

  }
}
