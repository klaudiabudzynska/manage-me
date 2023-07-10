import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FeaturesComponent} from './features/features.component';
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TasksComponent} from './tasks/tasks.component';
import {ContainerComponent} from './container/container.component';
import {TaskComponent} from './task/task.component';
import {UserMiniatureComponent} from './user-miniature/user-miniature.component';
import {StatusLabelComponent} from './status-label/status-label.component'
import {ProjectDataService} from "./project-data.service";
import {TaskOperationComponent} from './task-operation/task-operation.component';
import {TASK_OPERATION_TYPE} from "./utils/consts";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeaturesComponent,
    TasksComponent,
    ContainerComponent,
    TaskComponent,
    UserMiniatureComponent,
    StatusLabelComponent,
    TaskOperationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'features-list', component: FeaturesComponent},
      {path: 'tasks-list', component: TasksComponent},
      {path: 'task', component: TaskComponent},
      {path: 'add-task', component: TaskOperationComponent, data: {type: TASK_OPERATION_TYPE.add}},
      {path: 'edit-task', component: TaskOperationComponent, data: {type: TASK_OPERATION_TYPE.edit}},
    ]),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [ProjectDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
