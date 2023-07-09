import {Component, Input} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {ProjectDataService, Task, Feature} from "../project-data.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [ProjectDataService]
})
export class TaskComponent {
  @Input() queryParams?: Params | null;
  task: Task | undefined;
  feature: Feature | undefined;

  protected readonly faPen = faPen;
  protected readonly faTrash = faTrash;

  constructor(private route: ActivatedRoute, private router: Router, private projectDataService: ProjectDataService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.task = this.projectDataService.getTasks().find(task => task.id === parseInt(params['id']));

        if (!this.task) {
          return;
        }

        this.feature = this.projectDataService.getFeatureOfTask(this.task.id);
      }
    );
  }

  handleEditStart() {

  }

  handleDelete() {
    if (!this.task) {
      return;
    }

    this.projectDataService.deleteTask(this.task.id);
    this.router.navigateByUrl('/tasks-list');
  }
}
