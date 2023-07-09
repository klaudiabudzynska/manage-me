import { Component } from '@angular/core';
import { faChevronUp, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import {Feature, ProjectDataService} from "../project-data.service";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  providers: [ProjectDataService]
})
export class FeaturesComponent {
  features: Feature[];
  newFeatureName: string;
  updatedFeatureName: string;
  editedFeatureIndex: number = -1;
  faChevronUp = faChevronUp;
  protected readonly faTrash = faTrash;
  protected readonly faPen = faPen;

  constructor(private projectDataService: ProjectDataService) {
    this.features = projectDataService.getProjectData()
  }

  handleNewFeatureSave() {
    if (this.newFeatureName?.length > 0) {
      this.projectDataService.addNewFeature(this.newFeatureName);
      this.features = this.projectDataService.getProjectData();
      this.newFeatureName = '';
    }
  };

  handleFeatureEdit() {
    this.projectDataService.editFeatureName(this.editedFeatureIndex, this.updatedFeatureName);
    this.features = this.projectDataService.getProjectData();
    this.handleFeatureEditCancel();
  }

  handleFeatureEditCancel() {
    this.editedFeatureIndex = -1;
    this.updatedFeatureName = '';
  }

  handleEditStart(featureId: number, e: Event) {
    e.stopPropagation();
    this.editedFeatureIndex = this.features.findIndex(globalFeature => globalFeature.id === featureId);
    this.updatedFeatureName = this.features[this.editedFeatureIndex].name;
  }

  handleDeleteStart(featureId: number, e: Event) {
    e.stopPropagation();
    if (this.editedFeatureIndex !== -1) {
      return;
    }

    this.projectDataService.deleteFeature(featureId);
    this.features = this.projectDataService.getProjectData();
  }

  handleToggleFeature(featureId: number) {
    const featureIndex = this.features.findIndex(globalFeature => globalFeature.id === featureId);
    this.features[featureIndex].expanded = !this.features[featureIndex].expanded;
  }
}
