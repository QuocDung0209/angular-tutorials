import { AddClassDirective } from './directives/add-class.directive';
import { ClickOutsideComponent } from '../code-snippets/pages/click-outside/click-outside.component';
import { ClickOutsideV2Directive } from './directives/click-outside-v2.directive';
import { ClipboardDirective } from './directives/clipboard.directive';
import { CodeHighlighterComponent } from './components/code-highlighter/code-highlighter.component';
import { CommonModule } from '@angular/common';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { DragDropDirective } from './directives/drag-drop.directive';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { IfDirective } from './directives/if.directive';
import { NgModule } from '@angular/core';
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
    ClickOutsideComponent,
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
  imports: [CommonModule],
  exports: [
    CodeHighlighterComponent,
    PopoverComponent,
    ProgressComponent,
    SpinnerComponent,
    TabsComponent,
    UploadFileComponent,
    UploadFilesDropzoneComponent,
    AddClassDirective,
    ClickOutsideComponent,
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
  ],
})
export class SharedModule {}
