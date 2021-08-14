import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipDirective } from './shared/directives/tooltip.directive';
import { AddClassDirective } from './shared/directives/add-class.directive';
import { IfDirective } from './shared/directives/if.directive';

@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    AddClassDirective,
    IfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
