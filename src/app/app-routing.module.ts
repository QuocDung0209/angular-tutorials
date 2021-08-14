import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TooltipDirectiveComponent } from './components/tooltip-directive/tooltip-directive.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tooltip',
    pathMatch: 'full'
  },
  {
    path: 'tooltip',
    component: TooltipDirectiveComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
