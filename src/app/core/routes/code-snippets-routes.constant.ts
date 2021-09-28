import { BootstrapFormsComponent } from 'src/app/code-snippets/pages/bootstrap-forms/bootstrap-forms.component';
import { ClickOutsideComponent } from 'src/app/code-snippets/pages/click-outside/click-outside.component';
import { CopyToClipboardComponent } from 'src/app/code-snippets/pages/copy-to-clipboard/copy-to-clipboard.component';
import { DragDropComponent } from 'src/app/code-snippets/pages/drag-drop/drag-drop.component';
import { JsonStringifyComponent } from 'src/app/code-snippets/pages/json-stringify/json-stringify.component';
import { TextOveflowCssComponent } from 'src/app/code-snippets/pages/text-oveflow-css/text-oveflow-css.component';
import { TooltipCssComponent } from 'src/app/code-snippets/pages/tooltip-css/tooltip-css.component';
import { TooltipDirectiveComponent } from 'src/app/code-snippets/pages/tooltip-directive/tooltip-directive.component';

export const CODE_SNIPPETS = [
  {
    title: 'Tooltip Directive',
    routerLink: '/code-snippets/tooltip-directive',
    path: 'tooltip-directive',
    component: TooltipDirectiveComponent,
  },
  {
    title: 'Tooltip CSS',
    routerLink: '/code-snippets/tooltip-css',
    path: 'tooltip-css',
    component: TooltipCssComponent,
  },
  {
    title: 'Text Overflow',
    routerLink: '/code-snippets/text-overflow',
    path: 'text-overflow',
    component: TextOveflowCssComponent,
  },
  {
    title: 'Invalid Tooltip',
    routerLink: '/code-snippets/invalid-tooltip',
    path: 'invalid-tooltip',
    component: BootstrapFormsComponent,
  },
  {
    title: 'Click Outside',
    routerLink: '/code-snippets/click-outside',
    path: 'click-outside',
    component: ClickOutsideComponent,
  },
  {
    title: 'Drag & Drop',
    routerLink: '/code-snippets/drag-drop',
    path: 'drag-drop',
    component: DragDropComponent,
  },
  {
    title: 'Copy to clipboard',
    routerLink: '/code-snippets/copy-to-clipboard',
    path: 'copy-to-clipboard',
    component: CopyToClipboardComponent,
  },
  {
    title: 'JSON Stringify',
    routerLink: '/code-snippets/json-stringify',
    path: 'json-stringify',
    component: JsonStringifyComponent,
  },
];
