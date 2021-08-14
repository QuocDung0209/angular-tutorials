import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[addClass]'
})
export class AddClassDirective implements OnInit {
  @Input() addClass: string = '';

  constructor(private el: ElementRef) { 
  }

  ngOnInit() {
    this.el.nativeElement.classList.add(this.addClass);
  }

}
