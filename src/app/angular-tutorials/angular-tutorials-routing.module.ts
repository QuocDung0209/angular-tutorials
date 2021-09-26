import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TUTORIALS } from '../constants/tutorials-routes.constant';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'angular-forms',
    pathMatch: 'full',
  },
  ...TUTORIALS.map(({ path, component }) => ({ path, component })),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularTutorialsRoutingModule {}
