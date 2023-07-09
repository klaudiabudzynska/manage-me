import { Component } from '@angular/core';
import { faChevronUp, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import {addNewFeature, deleteFeature, editFeatureName, getProjectData} from "../utils/projectData";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  features = getProjectData();
  newFeatureName: string;
  updatedFeatureName: string;
  editedFeatureIndex: number = -1;
  faChevronUp = faChevronUp;
  protected readonly faTrash = faTrash;
  protected readonly faPen = faPen;

  handleNewFeatureSave() {
    if (this.newFeatureName?.length > 0) {
      addNewFeature(this.newFeatureName);
      this.features = getProjectData();
      this.newFeatureName = '';
    }
  };

  handleFeatureEdit() {
    editFeatureName(this.editedFeatureIndex, this.updatedFeatureName);
    this.features = getProjectData();
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

    deleteFeature(featureId);
    this.features = getProjectData();
  }

  handleToggleFeature(featureId: number) {
    const featureIndex = this.features.findIndex(globalFeature => globalFeature.id === featureId);
    this.features[featureIndex].expanded = !this.features[featureIndex].expanded;
  }
}
