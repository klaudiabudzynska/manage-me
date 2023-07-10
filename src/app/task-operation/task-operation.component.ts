import {Component} from '@angular/core';
import {Feature, ProjectDataService, STATUS, Task} from "../project-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TASK_OPERATION_TYPE} from "../utils/consts";

@Component({
  selector: 'app-task-operation',
  templateUrl: './task-operation.component.html',
  styleUrls: ['./task-operation.component.scss'],
  providers: [ProjectDataService]
})
export class TaskOperationComponent {
  task: Task | undefined
  taskId: number | undefined
  features: Feature[]
  newTaskName: string
  statuses = STATUS
  newStatus: STATUS = STATUS.ToDo
  newFeature: number | undefined
  newDescription: string
  operationType: TASK_OPERATION_TYPE

  constructor(private route: ActivatedRoute, private projectDataService: ProjectDataService, private router: Router) {

  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.features = this.projectDataService.getProjectData();

        if (!params['id']) {
          return;
        }

        this.taskId = parseInt(params['id'])
        this.task = this.projectDataService.getTasks().find(task => task.id === this.taskId);

        if (!this.task) {
          return;
        }

        this.newTaskName = this.task.name;
        this.newStatus = this.task.status;
        this.newFeature = this.projectDataService.getFeatureOfTask(this.task.id)?.id;
        this.newDescription = this.task.description;
      }
    );

    this.route.data
      .subscribe(params => {
        this.operationType = params['type'];
      })
  }

  handleSave() {
    if (this.newTaskName) {
      if (this.operationType === TASK_OPERATION_TYPE.edit && this.taskId) {
        this.projectDataService.updateTask({
          id: this.taskId,
          name: this.newTaskName,
          status: this.newStatus,
          description: this.newDescription,
        }, this.newFeature)
      } else if (this.operationType === TASK_OPERATION_TYPE.add) {
        this.projectDataService.addTask({
          name: this.newTaskName,
          description: this.newDescription,
        }, this.newFeature)
      }

      this.router.navigateByUrl('/tasks-list');
    }
  }
}
