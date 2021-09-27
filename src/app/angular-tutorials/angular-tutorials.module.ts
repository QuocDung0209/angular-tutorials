import { AngularFormsComponent } from './pages/angular-forms/angular-forms.component';
import { AngularTutorialsRoutingModule } from './angular-tutorials-routing.module';
import { AsyncLoadingTutorialsComponent } from './pages/async-loading-tutorials/async-loading-tutorials.component';
import { DockerContainerComponent } from './pages/docker-container/docker-container.component';
import { FolderStructureComponent } from './pages/folder-structure/folder-structure.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FolderStructureComponent,
    AngularFormsComponent,
    AsyncLoadingTutorialsComponent,
    DockerContainerComponent
  ],
  imports: [SharedModule, AngularTutorialsRoutingModule],
})
export class AngularTutorialsModule {}
