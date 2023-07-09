import {Component, Input} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {getProjectData, getTasks, STATUS, Task} from "../utils/projectData";
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() queryParams?: Params | null;
  task: Task | undefined;
  status: string;

  protected readonly faPen = faPen;
  protected readonly faTrash = faTrash;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.task = getTasks().find(task => task.id === parseInt(params['id']));

        if (this.task) {
          switch (this.task.status) {
            case STATUS.ToDo:
              this.status = 'To do';
              break;
            case STATUS.Doing:
              this.status = 'Doing';
              break;
            case STATUS.Done:
              this.status = 'Done';
              break;
          }
        }
      }
    );
  }

  handleEditStart() {

  }

  handleDelete() {

  }
}
