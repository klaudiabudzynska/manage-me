export enum STATUS {
'ToDo',
'Doing',
'Done'
}

interface Task {
  name: string,
  status: STATUS,
}

interface Feature {
  name: string,
  expanded: boolean,
  tasks?: Task[],
}

export const tasks = [
  {
    name: 'abc',
    status: STATUS.ToDo
  },
  {
    name: 'cbd',
    status: STATUS.Doing
  },
  {
    name: 'fdfsdf',
    status: STATUS.Done
  },
  {
    name: 'fdsfsdfsd',
    status: STATUS.ToDo,
  },
  {
    name: 'abc',
    status: STATUS.ToDo,
  },
  {
    name: 'cbd',
    status: STATUS.Done,
  },
  {
    name: 'fdfsdf',
    status: STATUS.ToDo,
  },
  {
    name: 'fdsfsdfsd',
    status: STATUS.Done,
  },
  {
    name: 'abc',
    status: STATUS.Done,
  },
  {
    name: 'cbd',
    status: STATUS.Done,
  },
  {
    name: 'fdfsdf',
    status: STATUS.Doing,
  },
  {
    name: 'fdsfsdfsd',
    status: STATUS.ToDo,
  },
  {
    name: 'abc',
    status: STATUS.Doing,
  },
  {
    name: 'cbd',
    status: STATUS.ToDo,
  },
  {
    name: 'fdfsdf',
    status: STATUS.Doing,
  },
  {
    name: 'fdsfsdfsd',
    status: STATUS.Done,
  },
];

const projectData: Feature[] = [
  {
    name: 'Navigation links',
    expanded: false,
    tasks: [
      tasks[0],
      tasks[1],
      tasks[2],
      tasks[3],
    ]
  },
  {
    name: 'User database',
    expanded: false,
    tasks: [
      tasks[4],
      tasks[5],
      tasks[6],
      tasks[7],
    ]
  },
  {
    name: 'Components communication',
    expanded: false,
    tasks: [
      tasks[8],
      tasks[9],
      tasks[10],
      tasks[11],
    ]
  },
  {
    name: 'Optimisation',
    expanded: false,
    tasks: [
      tasks[12],
      tasks[13],
      tasks[14],
      tasks[15],
    ]
  }
];

export const editFeatureName = (featureIndex: number, newName: string) => {
  projectData[featureIndex].name = newName;
}

export const deleteFeature = (featureIndex: number) => {
  projectData.splice(featureIndex, 1);
}

export const addNewFeature = (featureName: string) => {
  projectData.push({name: featureName, expanded: false});
}

export const getProjectData = () => {
  return projectData;
}

export const getTasks = () => {
  return tasks;
}
