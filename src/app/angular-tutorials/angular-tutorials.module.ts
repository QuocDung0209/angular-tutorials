import { AngularFormsComponent } from './pages/angular-forms/angular-forms.component';
import { AngularTutorialsRoutingModule } from './angular-tutorials-routing.module';
import { AsyncLoadingTutorialsComponent } from './pages/async-loading-tutorials/async-loading-tutorials.component';
import { DockerContainerComponent } from './pages/docker-container/docker-container.component';
import { FolderStructureComponent } from './pages/folder-structure/folder-structure.component';
import { InitialProjectComponent } from './pages/initial-project/initial-project.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OverviewComponent } from './pages/overview/overview.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { DirectivesTutorialComponent } from './pages/directives-tutorial/directives-tutorial.component';
import { PipesTutorialComponent } from './pages/pipes-tutorial/pipes-tutorial.component';
import { ViewEncapsulationComponent } from './pages/view-encapsulation/view-encapsulation.component';
import { DependencyInjectionComponent } from './pages/dependency-injection/dependency-injection.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';

@NgModule({
  declarations: [
    FolderStructureComponent,
    AngularFormsComponent,
    AsyncLoadingTutorialsComponent,
    DockerContainerComponent,
    InitialProjectComponent,
    OverviewComponent,
    DataBindingComponent,
    DirectivesTutorialComponent,
    PipesTutorialComponent,
    ViewEncapsulationComponent,
    DependencyInjectionComponent,
    DynamicComponent,
    ChangeDetectionComponent
  ],
  imports: [SharedModule, AngularTutorialsRoutingModule],
})
export class AngularTutorialsModule {}
