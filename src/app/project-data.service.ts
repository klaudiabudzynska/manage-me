import { Injectable } from '@angular/core';

export enum STATUS {
  'ToDo',
  'Doing',
  'Done'
}
export const TASKS_INIT = [
  {
    id: 243234,
    name: 'abc',
    status: STATUS.ToDo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 1,
    name: 'cbd',
    status: STATUS.ToDo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    name: 'fdsfsdfsd',
    status: STATUS.ToDo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    name: 'fdfsdf',
    status: STATUS.ToDo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 4,
    name: 'fdsfsdfsd',
    status: STATUS.ToDo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 5,
    name: 'abc',
    status: STATUS.Done,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 6,
    name: 'cbd',
    status: STATUS.Done,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 7,
    name: 'fdfsdf',
    status: STATUS.Done,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 8,
    name: 'fdsfsdfsd',
    status: STATUS.Done,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 9,
    name: 'abc',
    status: STATUS.Doing,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 10,
    name: 'cbd',
    status: STATUS.ToDo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 11,
    name: 'fdfsdf',
    status: STATUS.Doing,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 12,
    name: 'fdsfsdfsd',
    status: STATUS.Done,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export const PROJECT_DATA_INIT = [
  {
    id: 1,
    name: 'Navigation links',
    status: STATUS.ToDo,
    expanded: false,
    tasks: [
      TASKS_INIT[0],
      TASKS_INIT[1],
      TASKS_INIT[2],
      TASKS_INIT[3],
    ]
  },
  {
    id: 2,
    name: 'User database',
    status: STATUS.Doing,
    expanded: false,
    tasks: [
      TASKS_INIT[4],
      TASKS_INIT[5],
    ]
  },
  {
    id: 3,
    name: 'Components communication',
    status: STATUS.Done,
    expanded: false,
    tasks: [
      TASKS_INIT[6],
      TASKS_INIT[7],
    ]
  },
  {
    id: 4,
    name: 'Optimisation',
    status: STATUS.Doing,
    expanded: false,
    tasks: [
      TASKS_INIT[8],
      TASKS_INIT[9],
      TASKS_INIT[10],
      TASKS_INIT[11],
      TASKS_INIT[12],
    ]
  }
];


export interface Task {
  id: number,
  name: string,
  status: STATUS,
  description: string,
}

export interface Feature {
  id: number,
  name: string,
  status: STATUS,
  expanded: boolean,
  tasks: Task[],
}

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  tasks: Task[]
  projectData: Feature[]

  constructor() {
    this.tasks = TASKS_INIT;
    this.projectData = PROJECT_DATA_INIT;
  }

  getProjectData() {
    return this.projectData;
  }

  getTasks() {
    return this.tasks;
  }

  editFeatureName (featureIndex: number, newName: string) {
    this.projectData[featureIndex].name = newName;
  }

  deleteFeature (featureId: number) {
    const featureIndex = this.projectData.findIndex(feature => feature.id === featureId);
    this.projectData.splice(featureIndex, 1);
  }

  addNewFeature (featureName: string) {
    this.projectData.push({
      id: new Date().getTime(),
      name: featureName,
      status: STATUS.ToDo,
      expanded: false,
      tasks: [],
    });
  }

  isTaskInFeature (taskId: number, feature: Feature) {
    return !!feature?.tasks.some(task => task.id === taskId)
  }

 getFeatureOfTask (taskId: number) {
    return this.projectData.find(feature => {
      return this.isTaskInFeature(taskId, feature);
    });
  }

  updateFeatureStatus (featureId: number) {
    const featureIndex = this.projectData.findIndex(feature => feature.id === featureId);

    if (this.projectData[featureIndex].tasks.every(task => task.status === STATUS.ToDo)) {
      this.projectData[featureIndex].status = STATUS.ToDo;
      return;
    }

    if (this.projectData[featureIndex].tasks.every(task => task.status === STATUS.Done)) {
      this.projectData[featureIndex].status = STATUS.Done;
      return;
    }

    this.projectData[featureIndex].status = STATUS.Doing;
  }

  deleteTask (taskId: number) {
    const taskIdInArray = this.tasks.findIndex(task => task.id === taskId);
    this.tasks.splice(taskIdInArray, 1);

    const featureIndex = this.projectData.findIndex(feature => {
      return this.isTaskInFeature(taskId, feature);
    });

    if (featureIndex === -1) {
      return;
    }

    const taskIdInFeature = this.projectData[featureIndex].tasks.findIndex(task => task.id === taskId);
    this.projectData[featureIndex].tasks.splice(taskIdInFeature, 1);

    this.updateFeatureStatus(this.projectData[featureIndex].id);
  }

  updateTask (taskData: Task, featureId: number | undefined) {
    const taskIndex = this.tasks.findIndex(task => task.id === taskData.id);
    this.tasks[taskIndex] = {
      ...this.tasks[taskIndex],
      ...taskData
    }

    if (featureId) {
      const currentFeature = this.getFeatureOfTask(taskData.id);

      if (currentFeature) {
        const currentFeatureIndex = this.projectData.findIndex(feature => feature.id === currentFeature.id);
        const taskIndexInFeature = this.projectData[currentFeatureIndex].tasks.findIndex(task => task.id === taskIndex);
        this.projectData[currentFeatureIndex].tasks.splice(taskIndexInFeature, 1);
      }

      const featureIndex = this.projectData.findIndex(feature => feature.id === featureId);
      this.projectData[featureIndex].tasks.push(this.tasks[taskIndex]);
    }
  }

  addTask (taskData: Omit<Task, 'id' | 'status'>, featureId: number | undefined) {
    const newTask = {
      ...taskData,
      id: new Date().getTime(),
      status: STATUS.ToDo
    };

    this.tasks.push(newTask)

    if (featureId) {
      const featureIndex = this.projectData.findIndex(feature => feature.id === featureId);
      this.projectData[featureIndex].tasks.push(newTask)
    }
  }
}
