import { BootstrapFormsComponent } from '../code-snippets/pages/bootstrap-forms/bootstrap-forms.component';
import { ClickOutsideComponent } from '../code-snippets/pages/click-outside/click-outside.component';
import { CopyToClipboardComponent } from '../code-snippets/pages/copy-to-clipboard/copy-to-clipboard.component';
import { DragDropComponent } from '../code-snippets/pages/drag-drop/drag-drop.component';
import { JsonStringifyComponent } from '../code-snippets/pages/json-stringify/json-stringify.component';
import { TextOveflowCssComponent } from '../code-snippets/pages/text-oveflow-css/text-oveflow-css.component';
import { TooltipCssComponent } from '../code-snippets/pages/tooltip-css/tooltip-css.component';
import { TooltipDirectiveComponent } from '../code-snippets/pages/tooltip-directive/tooltip-directive.component';

export const CODE_SNIPPETS = [
  {
    title: 'Tooltip Directive',
    routerLink: '/tooltip-directive',
    path: 'tooltip-directive',
    component: TooltipDirectiveComponent,
  },
  {
    title: 'Tooltip CSS',
    routerLink: '/tooltip-css',
    path: 'tooltip-css',
    component: TooltipCssComponent,
  },
  {
    title: 'Text Overflow',
    routerLink: '/text-overflow',
    path: 'text-overflow',
    component: TextOveflowCssComponent,
  },
  {
    title: 'Invalid Tooltip',
    routerLink: '/invalid-tooltip',
    path: 'invalid-tooltip',
    component: BootstrapFormsComponent,
  },
  {
    title: 'Click Outside',
    routerLink: '/click-outside',
    path: 'click-outside',
    component: ClickOutsideComponent,
  },
  {
    title: 'Drag & Drop',
    routerLink: '/drag-drop',
    path: 'drag-drop',
    component: DragDropComponent,
  },
  {
    title: 'Copy to clipboard',
    routerLink: '/copy-to-clipboard',
    path: 'copy-to-clipboard',
    component: CopyToClipboardComponent,
  },
  {
    title: 'JSON Stringify',
    routerLink: '/json-stringify',
    path: 'json-stringify',
    component: JsonStringifyComponent,
  },
];
