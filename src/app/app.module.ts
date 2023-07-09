import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FeaturesComponent } from './features/features.component';
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TasksComponent } from './tasks/tasks.component';
import { ContainerComponent } from './container/container.component';
import { TaskComponent } from './task/task.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeaturesComponent,
    TasksComponent,
    ContainerComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'features-list', component: FeaturesComponent},
      {path: 'tasks-list', component: TasksComponent},
      {path: 'task', component: TaskComponent},
    ]),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
