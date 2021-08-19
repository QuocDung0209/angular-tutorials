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
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ClickOutsideV2Directive } from './directives/click-outside-v2.directive';
import { CopyToClipboardComponent } from './components/copy-to-clipboard/copy-to-clipboard.component';
import { ClipboardDirective } from './directives/clipboard.directive';
import { DragDropDirective } from './directives/drag-drop.directive';
import { ProgressComponent } from './components/progress/progress.component';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { UploadFilesDropzoneComponent } from './components/upload-files-dropzone/upload-files-dropzone.component';

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
    TextOverflowDirective,
    ClickOutsideDirective,
    ClickOutsideV2Directive,
    CopyToClipboardComponent,
    ClipboardDirective,
    DragDropDirective,
    ProgressComponent,
    DragAndDropDirective,
    UploadFileComponent,
    DropZoneDirective,
    UploadFilesDropzoneComponent
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
