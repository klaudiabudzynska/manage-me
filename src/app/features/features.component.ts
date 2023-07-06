import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  features: string[] = [
    'Navigation links',
    'User database',
    'Components communication',
    'Optimisation'
  ];
  newFeature: string;

  handleClick() {
    if (this.newFeature?.length > 0) {
      this.features.push(this.newFeature);
      this.newFeature = '';
    }
  };
}
