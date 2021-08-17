import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { AddClassDirective } from './directives/add-class.directive';
import { IfDirective } from './directives/if.directive';
import { TooltipDirectiveComponent } from './components/tooltip-directive/tooltip-directive.component';
import { ClickOutsideComponent } from './components/click-outside/click-outside.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { FormsModule } from '@angular/forms';
import { JsonStringifyComponent } from './components/json-stringify/json-stringify.component';
import { TooltipCssComponent } from './components/tooltip-css/tooltip-css.component';
import { BootstrapFormsComponent } from './components/bootstrap-forms/bootstrap-forms.component';
import { TextOveflowCssComponent } from './components/text-oveflow-css/text-oveflow-css.component';
import { TextOverflowDirective } from './directives/text-overflow.directive';

@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    AddClassDirective,
    IfDirective,
    TooltipDirectiveComponent,
    ClickOutsideComponent,
    DragDropComponent,
    JsonStringifyComponent,
    TooltipCssComponent,
    BootstrapFormsComponent,
    TextOveflowCssComponent,
    TextOverflowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
