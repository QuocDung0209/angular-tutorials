import { Component, OnInit } from '@angular/core';
import { TOOLTIP_TS, TOOLTIP_CSS, HTML_TOOLTIP } from 'src/app/constants/tooltip-directive.constant';
import hljs from 'highlight.js/lib/common';

@Component({
  selector: 'app-tooltip-directive',
  templateUrl: './tooltip-directive.component.html',
  styleUrls: ['./tooltip-directive.component.scss'],
})
export class TooltipDirectiveComponent implements OnInit {
  title: string = "Tooltip - Attribute Directive";
  tsCode = hljs.highlight(TOOLTIP_TS, { language: 'typescript' }).value;
  cssCode = hljs.highlight(TOOLTIP_CSS, { language: 'css' }).value;
  htmlTooltip = HTML_TOOLTIP;

  constructor() { }

  ngOnInit(): void {
  }

}
