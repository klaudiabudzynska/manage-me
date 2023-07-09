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
  faTrash = faTrash;
  faPen = faPen;

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

  handleEditStart(featureName: string, e: Event) {
    e.stopPropagation();
    this.editedFeatureIndex = this.features.findIndex(globalFeature => globalFeature.name === featureName);
    this.updatedFeatureName = this.features[this.editedFeatureIndex].name;
  }

  handleDeleteStart(featureName: string, e: Event) {
    e.stopPropagation();
    if (this.editedFeatureIndex !== -1) {
      return;
    }

    const featureIndex = this.features.findIndex(globalFeature => globalFeature.name === featureName);
    deleteFeature(featureIndex);
    this.features = getProjectData();
  }

  handleToggleFeature(featureName: string) {
    const featureIndex = this.features.findIndex(globalFeature => globalFeature.name === featureName);
    this.features[featureIndex].expanded = !this.features[featureIndex].expanded;
  }
}
