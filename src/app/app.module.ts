import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { AddClassDirective } from './directives/add-class.directive';
import { IfDirective } from './directives/if.directive';
import { TooltipDirectiveComponent } from './components/tooltip-directive/tooltip-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    AddClassDirective,
    IfDirective,
    TooltipDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
