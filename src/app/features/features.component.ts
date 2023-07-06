import { Component } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

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
  newFeature: string;
  faChevronUp = faChevronUp;

  handleNewFeatureSave() {
    if (this.newFeature?.length > 0) {
      this.features.push({name: this.newFeature, expanded: false});
      this.newFeature = '';
    }
  };

  handleToggleFeature(featureName: string) {
    const featureIndex = this.features.findIndex(globalFeature => globalFeature.name === featureName);
    this.features[featureIndex].expanded = !this.features[featureIndex].expanded;
  }
}
