import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

const clipboardIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>`;

@Directive({
  selector: '[clipboard]'
})
export class ClipboardDirective implements OnInit {
  @Input() clipboard: boolean = false;
  private clipboardEl!: HTMLElement;
  removed: boolean = true;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    if (this.clipboard) {
      // Create clipboard element
      /* <div class="wrapper-clipboard">
           <button type="button" class="btn-clipboard">Copy</button>
         </div>
      */
      this.clipboardEl = this.renderer.createElement('div');
      const btnClipboard = `<span type="button" class="btn-clipboard">${clipboardIcon}</span>`;
      this.renderer.setProperty(this.clipboardEl, 'innerHTML', btnClipboard);

      // Insert the clipboard element before the first element of the parent element
      this.renderer.insertBefore(this.elRef.nativeElement, this.clipboardEl, this.elRef.nativeElement.children[0]);

      // Add clipboard class to clipboard element to show clipboard icon
      this.renderer.addClass(this.clipboardEl, 'wrapper-clipboard');
    }
  }

  // Copy text to clipboard
  @HostListener('click')
  onClick() {
    const el = document.createElement('textarea');
    el.value = this.elRef.nativeElement.innerText;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.renderer.addClass(this.clipboardEl, 'copied');
    this.removed = false;
  }

  // Set initial tooltip content when mouseleave clipboard area
  @HostListener('mouseleave') onMouseLeave() {
    if (!this.removed) {
      this.renderer.removeClass(this.clipboardEl, 'copied');
      this.removed = true;
    }
  }

}
