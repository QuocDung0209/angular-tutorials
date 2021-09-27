import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'angular-tutorials',
    pathMatch: 'full',
  },
  {
    path: 'angular-tutorials',
    loadChildren: () =>
      import('./angular-tutorials/angular-tutorials.module').then(
        (m) => m.AngularTutorialsModule
      ),
  },
  {
    path: 'code-snippets',
    loadChildren: () =>
      import('./code-snippets/code-snippets.module').then(
        (m) => m.CodeSnippetsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
