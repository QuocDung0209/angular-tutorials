import { BootstrapFormsComponent } from "../components/bootstrap-forms/bootstrap-forms.component";
import { ClickOutsideComponent } from "../components/click-outside/click-outside.component";
import { CopyToClipboardComponent } from "../components/copy-to-clipboard/copy-to-clipboard.component";
import { DragDropComponent } from "../components/drag-drop/drag-drop.component";
import { JsonStringifyComponent } from "../components/json-stringify/json-stringify.component";
import { TextOveflowCssComponent } from "../components/text-oveflow-css/text-oveflow-css.component";
import { TooltipCssComponent } from "../components/tooltip-css/tooltip-css.component";
import { TooltipDirectiveComponent } from "../components/tooltip-directive/tooltip-directive.component";

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
]