import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

const clipboardIcon = "data:image/png;base64,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";

@Directive({
  selector: '[clipboard]'
})
export class ClipboardDirective implements OnInit {
  @Input() clipboard: boolean = false;
  private clipboardEl!: HTMLElement;

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
      const btnClipboard = '<button type="button" class="btn-clipboard">Copy</button>';
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
  }

}
