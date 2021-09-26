import { RouterModule, Routes } from '@angular/router';

import { CODE_SNIPPETS } from '../constants/code-snippets-routes.constant';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tooltip-directive',
    pathMatch: 'full',
  },
  ...CODE_SNIPPETS.map(({ path, component }) => ({ path, component })),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeSnippetsRoutingModule {}
