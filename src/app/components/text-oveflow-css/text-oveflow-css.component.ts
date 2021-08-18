import { Component, OnInit } from '@angular/core';
import { EMPTY_STRING } from 'src/app/constants/common.constant';
import { ORIENT_OPTIONS, TEXT_OVERFLOW_METHOD, TEXT_OVERFLOW_OPTIONS, UNITS, WORD_BREAK_OPTIONS } from 'src/app/constants/text-overflow.constant';

@Component({
  selector: 'app-text-oveflow-css',
  templateUrl: './text-oveflow-css.component.html',
  styleUrls: ['./text-oveflow-css.component.scss']
})
export class TextOveflowCssComponent implements OnInit {
  title = 'Handle text overflow and create directive for it';
  methods = TEXT_OVERFLOW_METHOD;
  selectedMethod: string = TEXT_OVERFLOW_METHOD.textOverflow;
  selectedStyles: string = 'text-overflow: clip;';

  blockText = " specifies how overflowed content that is not displayed should be signaled to the user. It can be clipped, display an ellipsis (...), or display a custom string.";
  inlineBlockText = "The text-overflow property";

  // Result width
  units = UNITS;
  selectedUnit: string = 'px';
  width: number = 350;
  resultWidth = 'width: 350px;';

  // Text overflow method
  textOverflowOptions = TEXT_OVERFLOW_OPTIONS;

  // -webkit-box method
  orientOptions = ORIENT_OPTIONS;
  boxOrient: string = '-webkit-box-orient: vertical;';
  lineClamp: number = 1;

  // word-break method
  wordBreakOptions = WORD_BREAK_OPTIONS;

  // Angular directive method
  numberOfLines: number = 2;
  showTooltip: boolean = true;

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
      this.boxOrient = '-webkit-box-orient: vertical;';
      this.lineClamp = 1;
    }
    if (value === this.methods.wordBreak) {
      this.selectedStyles = 'word-break: break-all;';
    }
    if (value === this.methods.angularDirective) {
      this.selectedStyles = EMPTY_STRING;
      this.numberOfLines = 2;
      this.showTooltip = true;
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

  reset() {
    this.width = 350;
    this.selectedUnit = 'px';
    this.resultWidth = 'width: 350px;';
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
