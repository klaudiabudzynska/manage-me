import {Component, Input} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Feature, getFeatureOfTask, getTasks, STATUS, Task} from "../utils/projectData";
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() queryParams?: Params | null;
  task: Task | undefined;
  feature: Feature | undefined;

  protected readonly faPen = faPen;
  protected readonly faTrash = faTrash;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.task = getTasks().find(task => task.id === parseInt(params['id']));

        if (!this.task) {
          return;
        }

        console.log(this.task.status);
        this.feature = getFeatureOfTask(this.task.id);

        console.log(this.feature?.status);
      }
    );
  }

  handleEditStart() {

  }

  handleDelete() {

  }
}
