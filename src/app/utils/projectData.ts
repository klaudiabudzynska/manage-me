export enum STATUS {
'ToDo',
'Doing',
'Done'
}

interface Task {
  id: number,
  name: string,
  status: STATUS,
}

interface Feature {
  id: number,
  name: string,
  expanded: boolean,
  tasks?: Task[],
}

export const tasks = [
  {
    id: 1,
    name: 'abc',
    status: STATUS.ToDo
  },
  {
    id: 2,
    name: 'cbd',
    status: STATUS.Doing
  },
  {
    id: 3,
    name: 'fdfsdf',
    status: STATUS.Done
  },
  {
    id: 4,
    name: 'fdsfsdfsd',
    status: STATUS.ToDo,
  },
  {
    id: 5,
    name: 'abc',
    status: STATUS.ToDo,
  },
  {
    id: 6,
    name: 'cbd',
    status: STATUS.Done,
  },
  {
    id: 7,
    name: 'fdfsdf',
    status: STATUS.ToDo,
  },
  {
    id: 8,
    name: 'fdsfsdfsd',
    status: STATUS.Done,
  },
  {
    id: 9,
    name: 'abc',
    status: STATUS.Done,
  },
  {
    id: 10,
    name: 'cbd',
    status: STATUS.Done,
  },
  {
    id: 11,
    name: 'fdfsdf',
    status: STATUS.Doing,
  },
  {
    id: 12,
    name: 'fdsfsdfsd',
    status: STATUS.ToDo,
  },
  {
    id: 13,
    name: 'abc',
    status: STATUS.Doing,
  },
  {
    id: 14,
    name: 'cbd',
    status: STATUS.ToDo,
  },
  {
    id: 15,
    name: 'fdfsdf',
    status: STATUS.Doing,
  },
  {
    id: 16,
    name: 'fdsfsdfsd',
    status: STATUS.Done,
  },
];

const projectData: Feature[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
  projectData.push({
    id: new Date().getTime(),
    name: featureName,
    expanded: false
  });
}

export const getProjectData = () => {
  return projectData;
}

export const getTasks = () => {
  return tasks;
}
