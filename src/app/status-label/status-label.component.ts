import {Component, Input} from '@angular/core';
import {STATUS} from "../project-data.service";

@Component({
  selector: 'app-status-label',
  templateUrl: './status-label.component.html',
  styleUrls: ['./status-label.component.scss']
})
export class StatusLabelComponent {
  statusName: string;
  @Input() status: STATUS;

  ngOnInit() {
    this.statusName = this.setStatus();
  }

  setStatus() {
    switch (this.status) {
      case STATUS.ToDo:
        return this.statusName = 'To do';
      case STATUS.Doing:
        return this.statusName = 'Doing';
      case STATUS.Done:
        return this.statusName = 'Done';
    }
  }
}
