import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  HostListener
} from "@angular/core";

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  @Output() clickOutside: EventEmitter<any> = new EventEmitter();

  constructor(private elRef: ElementRef) { }

  // The second parameter ["$event.target"] is to define which values should be passed to the decoreated method
  // The $event parameter is a MouseEvent, which holds the target element in the target property
  // The onClick method will now be invoked every time a click was performed on the whole document.
  // Due to the use of HostListener, you don’t even need to unbind from the event—Angular is handling everything for you.
  @HostListener("document:click", ["$event.target"])
  onClick(target: any) {
    if (!this.elRef.nativeElement.contains(target)) {
      this.clickOutside.emit('Outside');
    } else {
      this.clickOutside.emit('Inside');
    }
  }
}

