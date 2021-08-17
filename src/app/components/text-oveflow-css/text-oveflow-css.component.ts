import { Component, OnInit } from '@angular/core';
import { EMPTY_STRING } from 'src/app/constants/common.constant';
import { ORIENT_OPTIONS, TEXT_OVERFLOW_METHOD, TEXT_OVERFLOW_OPTIONS, UNITS, WORD_BREAK_OPTIONS } from 'src/app/constants/text-overflow.constant';

@Component({
  selector: 'app-text-oveflow-css',
  templateUrl: './text-oveflow-css.component.html',
  styleUrls: ['./text-oveflow-css.component.scss']
})
export class TextOveflowCssComponent implements OnInit {
  methods = TEXT_OVERFLOW_METHOD;
  selectedMethod: string = TEXT_OVERFLOW_METHOD.webkitLineClamp;
  selectedStyles: string = 'text-overflow: clip;';

  units = UNITS;
  selectedUnit: string = 'px';
  width: number = 350;
  resultWidth = 'width: 350px;';

  textOverflowOptions = TEXT_OVERFLOW_OPTIONS;

  orientOptions = ORIENT_OPTIONS;
  boxOrient: string = '-webkit-box-orient: vertical;';
  lineClamp: number = 1;

  wordBreakOptions = WORD_BREAK_OPTIONS;

  constructor() { }

  ngOnInit(): void {
  }

  onMethodChange(value: string) {
    this.selectedMethod = value;

    if (value === this.methods.textOverflow) {
      this.selectedStyles = 'text-overflow: clip;';
    }
    if (value === this.methods.webkitLineClamp) {
      this.selectedStyles = EMPTY_STRING;
    }
    if (value === this.methods.wordBreak) {
      this.selectedStyles = 'word-break: break-all;';
    }
  }

  onWidthChange(value: any, type: string) {
    if (type === 'width') {
      this.width = value;
    } else {
      this.selectedUnit = value;
    }

    this.resultWidth = `width: ${this.width}${this.selectedUnit}`;
  }

  onWebkitBoxChange(value: any, type: string) {
    if (type === 'orient') {
      this.boxOrient = value;
    } else {
      this.lineClamp = value;
    }

    this.selectedStyles = `${this.boxOrient}-webkit-line-clamp:${this.lineClamp};`;
  }

}
