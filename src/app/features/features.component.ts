import { Component } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  features: {name: string, tasks?: string[]}[] = [
    {
      name: 'Navigation links',
      tasks: [
        'abc',
        'cbd',
        'fdfsdf',
        'fdsfsdfsd',
      ]
    },
    {
      name: 'User database',
      tasks: [
        'abc',
        'fdfsdf',
        'cbd',
        'fdsfsdfsd',
      ]
    },
    {
      name: 'Components communication',
      tasks: [
        'fdsfsdfsd',
        'abc',
        'cbd',
        'fdfsdf',
      ]
    },
    {
      name: 'Optimisation',
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
      this.features.push({name: this.newFeature});
      this.newFeature = '';
    }
  };

  handleToggleFeature(feature: string) {

  }
}
