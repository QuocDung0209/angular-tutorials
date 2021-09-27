import { Component, Input, OnInit } from '@angular/core';

import { EMPTY_STRING } from '../../constants/common.constant';
import hljs from 'highlight.js/lib/common';

@Component({
  selector: 'code-highlighter',
  templateUrl: './code-highlighter.component.html',
  styleUrls: ['./code-highlighter.component.scss']
})
export class CodeHighlighterComponent implements OnInit {
  @Input() height: string = 'auto';
  @Input('codeClass') class: string = 'code-block';
  _code: string = EMPTY_STRING;
  @Input()
  get code() {
    return this._code;
  }
  set code(value: string) {
    this._code = hljs.highlight(value, { language: this.language }).value;
  }

  @Input() language: string = 'typescript';

  constructor() { }

  ngOnInit(): void {
  }

}
