import { Component } from '@angular/core';
import { faChevronUp, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  features: {name: string, expanded: boolean, tasks?: string[]}[] = [
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
  newFeatureName: string;
  updatedFeatureName: string;
  editedFeatureIndex: number = -1;
  faChevronUp = faChevronUp;
  faTrash = faTrash;
  faPen = faPen;

  handleNewFeatureSave() {
    if (this.newFeatureName?.length > 0) {
      this.features.push({name: this.newFeatureName, expanded: false});
      this.newFeatureName = '';
    }
  };

  handleFeatureEdit() {
    this.features[this.editedFeatureIndex].name = this.updatedFeatureName;
    this.handleFeatureEditCancel();
  }

  handleFeatureEditCancel() {
    this.editedFeatureIndex = -1;
    this.updatedFeatureName = '';
  }

  handleEditStart(featureName: string) {
    this.editedFeatureIndex = this.features.findIndex(globalFeature => globalFeature.name === featureName);
    this.updatedFeatureName = this.features[this.editedFeatureIndex].name;
  }

  handleDeleteStart(featureName: string) {
    if (this.editedFeatureIndex !== -1) {
      return;
    }

    const featureIndex = this.features.findIndex(globalFeature => globalFeature.name === featureName);
    this.features.splice(featureIndex, 1);
  }

  handleToggleFeature(featureName: string) {
    const featureIndex = this.features.findIndex(globalFeature => globalFeature.name === featureName);
    this.features[featureIndex].expanded = !this.features[featureIndex].expanded;
  }
}
