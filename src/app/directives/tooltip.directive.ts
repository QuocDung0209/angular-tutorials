import {
  Directive,
  Input,
  ElementRef,
  HostListener,
  Renderer2,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { createPopper, Placement } from '@popperjs/core';
import { isUndifined } from '../helpers/utils';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  @Input('tooltip')
  tooltipTitle!: string; // tooltipTitle may be string or HTML element
  @Input()
  placement: Placement = 'top';
  @Input()
  delay: string | any;
  tooltip: HTMLElement | any;
  // Distance between host element and tooltip element
  offset = 10;
  // Allow HTML in the tooltip.
  @Input() htmlTooltip: boolean = false;
  @Input() invalid!: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    if ((isUndifined(this.invalid) || this.invalid) && !this.tooltip) { this.show(); }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) { this.hide(); }
  }

  @HostListener('click') onClick() {
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

    if (this.htmlTooltip) {
      this.renderer.setProperty(
        this.tooltip,
        'innerHTML',
        this.sanitizer.sanitize(SecurityContext.HTML, this.tooltipTitle)
      );
    } else {
      this.renderer.appendChild(
        this.tooltip,
        this.renderer.createText(this.tooltipTitle) // textNode
      );
    }

    this.renderer.appendChild(document.body, this.tooltip);
    // this.renderer.appendChild(this.el.nativeElement, this.tooltip);

    this.renderer.addClass(this.tooltip, 'ng-tooltip');
    // this.renderer.addClass(this.tooltip, `ng-tooltip-${this.placement}`);

    if (this.invalid) {
      this.renderer.addClass(this.tooltip, 'invalid');
    }

    // delay setting
    this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);
  }

  setPosition() {
    // The Element.getBoundingClientRect() method returns a DOMRect object
    // providing information about the size of an element and its position relative to the viewport.

    // Host element size and position information
    const hostPos = this.el.nativeElement.getBoundingClientRect();

    // Tooltip element size and position information
    const tooltipPos = this.tooltip.getBoundingClientRect();

    // window's scroll top
    // The getBoundingClientRect method returns the relative position in the viewport.
    // When scrolling occurs, the vertical scroll coordinate value should be reflected on the top of the tooltip element.
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top, left;

    if (this.placement === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.placement === 'bottom') {
      top = hostPos.bottom + this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.placement === 'left') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.left - tooltipPos.width - this.offset;
    }

    if (this.placement === 'right') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + this.offset;
    }

    // When scrolling occurs, the vertical scroll coordinate value should be reflected on the top of the tooltip element.
    // If we don't plus scrollPos, when the scroll happens, the position of the tooltip will be incorrect.
    // Because Element.getBoundingClientRect() returns its position according to the viewport
    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }

  setPositionByPopper() {
    if (this.invalid) {
      this.placement = 'bottom-start';
      this.offset = 2;
    }

    createPopper(this.el.nativeElement, this.tooltip, {
      placement: this.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, this.offset],
          },
        },
      ],
    });
  }
}