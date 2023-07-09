const projectData: {name: string, expanded: boolean, tasks?: string[]}[] = [
  {
    name: 'Navigation links',
    expanded: false,
    tasks: [
      'abc',
      'cbd',
      'fdfsdf',
      'fdsfsdfsd',
    ]
  },
  {
    name: 'User database',
    expanded: false,
    tasks: [
      'abc',
      'fdfsdf',
      'cbd',
      'fdsfsdfsd',
    ]
  },
  {
    name: 'Components communication',
    expanded: false,
    tasks: [
      'fdsfsdfsd',
      'abc',
      'cbd',
      'fdfsdf',
    ]
  },
  {
    name: 'Optimisation',
    expanded: false,
    tasks: [
      'abc',
      'fdfsdf',
      'fdsfsdfsd',
      'cbd',
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
