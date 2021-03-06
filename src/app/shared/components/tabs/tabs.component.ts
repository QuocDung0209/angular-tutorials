import { Component, ContentChildren, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @ViewChild('tabActions', { static: true }) tabActions!: ElementRef;
  @ContentChildren('tabContent') tabContentChildren!: QueryList<ElementRef>;

  actionsClasses: string = 'nav-tabs';
  tabContentClass: string = 'tab-content-row';
  containerClass: string = 'tab-container-row';

  @Input()
  set tabDisplay(value: 'row' | 'column') {
    this.actionsClasses = value === 'column' ? 'nav-pills flex-column tab-content-column' : 'nav-tabs';
    this.tabContentClass = value === 'column' ? '' : 'tab-content-row';
    this.containerClass = value === 'column' ? 'tab-container-column' : 'tab-container-row';
  }


  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    if (this.tabContentChildren) {
      this.tabContentChildren.forEach((elementRef: ElementRef, index: number) => {
        const tabTitle = elementRef.nativeElement.attributes['tab-title'].value;
        const id = 'app-tabs-index' + index;
        const buttonElement: HTMLElement = this.renderer.createElement('button');

        // Create tab buttons
        this.renderer.setProperty(buttonElement, 'innerText', tabTitle);
        this.renderer.setAttribute(buttonElement, 'data-bs-toggle', 'tab');
        this.renderer.setAttribute(buttonElement, 'data-bs-target', `#${id}`);
        this.renderer.addClass(buttonElement, 'nav-link');
        !index && this.renderer.addClass(buttonElement, 'active');
        this.renderer.appendChild(this.tabActions.nativeElement, buttonElement);

        // Set up tab content
        elementRef.nativeElement.id = id;
        this.renderer.addClass(elementRef.nativeElement, 'tab-pane');
        this.renderer.addClass(elementRef.nativeElement, 'fade');
        if (!index) {
          this.renderer.addClass(elementRef.nativeElement, 'active');
          this.renderer.addClass(elementRef.nativeElement, 'show');
        }
      })
    }
  }

}
