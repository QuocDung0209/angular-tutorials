import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';

import { AddClassDirective } from './directives/add-class.directive';
import { ClickOutsideV2Directive } from './directives/click-outside-v2.directive';
import { ClipboardDirective } from './directives/clipboard.directive';
import { CodeHighlighterComponent } from './components/code-highlighter/code-highlighter.component';
import { CommonModule } from '@angular/common';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { DragDropDirective } from './directives/drag-drop.directive';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { FormsModule } from '@angular/forms';
import { IfDirective } from './directives/if.directive';
import { PopoverComponent } from './components/popover/popover.component';
import { PopoverDirective } from './directives/popover.directive';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TextOverflowDirective } from './directives/text-overflow.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { UploadFilesDropzoneComponent } from './components/upload-files-dropzone/upload-files-dropzone.component';

@NgModule({
  declarations: [
    CodeHighlighterComponent,
    PopoverComponent,
    ProgressComponent,
    SpinnerComponent,
    TabsComponent,
    UploadFileComponent,
    UploadFilesDropzoneComponent,
    AddClassDirective,
    ClickOutsideV2Directive,
    ClipboardDirective,
    DragAndDropDirective,
    DragDropDirective,
    DropZoneDirective,
    IfDirective,
    PopoverDirective,
    TextOverflowDirective,
    TooltipDirective,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CodeHighlighterComponent,
    PopoverComponent,
    ProgressComponent,
    SpinnerComponent,
    TabsComponent,
    UploadFileComponent,
    UploadFilesDropzoneComponent,
    AddClassDirective,
    ClickOutsideV2Directive,
    ClipboardDirective,
    DragAndDropDirective,
    DragDropDirective,
    DropZoneDirective,
    IfDirective,
    PopoverDirective,
    TextOverflowDirective,
    TooltipDirective,
    CommonModule,
    FormsModule,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {}
