import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  Renderer2
} from '@angular/core';

import { EMPTY_STRING } from '../../constants/common.constant';
import { createPopper } from '@popperjs/core';

@Directive({
  selector: '[textOverflow]'
})
export class TextOverflowDirective implements OnChanges {
  @Input() textOverflow: string = EMPTY_STRING;
  @Input() lineClamp: number = 2;
  @Input() hoverShowFull: boolean = true;
  @Input() delay: string | any;
  private cache: boolean = false; // Mark styles deleted to not execute again
  tooltip: HTMLElement | any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnChanges() {
    if (this.textOverflow === 'text-overflow-directive') {
      this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
      this.renderer.setStyle(this.el.nativeElement, 'display', '-webkit-box');
      this.renderer.setStyle(this.el.nativeElement, '-webkit-box-orient', 'vertical');
      this.renderer.setStyle(this.el.nativeElement, '-webkit-line-clamp', this.lineClamp);
      this.cache = true;
    } else {
      if (this.cache) {
        this.renderer.removeStyle(this.el.nativeElement, 'overflow');
        this.renderer.removeStyle(this.el.nativeElement, 'display');
        this.renderer.removeStyle(this.el.nativeElement, '-webkit-box-orient');
        this.renderer.removeStyle(this.el.nativeElement, '-webkit-line-clamp');
        this.cache = false;
      }
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.textOverflow === 'text-overflow-directive' && this.hoverShowFull && !this.tooltip) { this.show(); }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) { this.hide(); }
  }

  show() {
    this.create();
    this.setPositionByPopper();
    this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
  }

  hide() {
    this.renderer.removeClass(this.tooltip, 'ng-tooltip-show');
    window.setTimeout(() => {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }, this.delay);
  }

  create() {
    this.tooltip = this.renderer.createElement('span');

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.el.nativeElement.innerText) // textNode
    );

    this.renderer.appendChild(document.body, this.tooltip);

    this.renderer.addClass(this.tooltip, 'ng-tooltip');

    this.renderer.setStyle(this.tooltip, 'max-width', `300px`);

    // delay setting
    this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);
  }

  setPositionByPopper() {
    createPopper(this.el.nativeElement, this.tooltip, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  }

}
