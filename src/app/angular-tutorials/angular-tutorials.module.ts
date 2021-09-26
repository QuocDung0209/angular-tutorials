import { AngularTutorialsRoutingModule } from './angular-tutorials-routing.module';
import { FolderStructureComponent } from './pages/folder-structure/folder-structure.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FolderStructureComponent],
  imports: [SharedModule, AngularTutorialsRoutingModule],
})
export class AngularTutorialsModule {}
