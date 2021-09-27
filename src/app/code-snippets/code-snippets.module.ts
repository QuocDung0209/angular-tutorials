import { BootstrapFormsComponent } from './pages/bootstrap-forms/bootstrap-forms.component';
import { ClickOutsideComponent } from './pages/click-outside/click-outside.component';
import { CodeSnippetsRoutingModule } from './code-snippets-routing.module';
import { CopyToClipboardComponent } from './pages/copy-to-clipboard/copy-to-clipboard.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { JsonStringifyComponent } from './pages/json-stringify/json-stringify.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TextOveflowCssComponent } from './pages/text-oveflow-css/text-oveflow-css.component';
import { TooltipCssComponent } from './pages/tooltip-css/tooltip-css.component';
import { TooltipDirectiveComponent } from './pages/tooltip-directive/tooltip-directive.component';

@NgModule({
  declarations: [
    BootstrapFormsComponent,
    ClickOutsideComponent,
    CopyToClipboardComponent,
    DragDropComponent,
    JsonStringifyComponent,
    TextOveflowCssComponent,
    TooltipCssComponent,
    TooltipDirectiveComponent,
  ],
  imports: [CodeSnippetsRoutingModule, SharedModule],
})
export class CodeSnippetsModule {}
