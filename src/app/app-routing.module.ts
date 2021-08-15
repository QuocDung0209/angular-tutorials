import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickOutsideComponent } from './components/click-outside/click-outside.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { JsonStringifyComponent } from './components/json-stringify/json-stringify.component';
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
  },
  {
    path: 'click-outside',
    component: ClickOutsideComponent,
  },
  {
    path: 'drag-drop',
    component: DragDropComponent,
  },
  {
    path: 'json-stringify',
    component: JsonStringifyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
