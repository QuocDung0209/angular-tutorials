import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  HostListener,
  OnInit
} from "@angular/core";
import { fromEvent } from "rxjs";
import { take } from "rxjs/operators";

@Directive({
  selector: '[clickOutsideV2]'
})
export class ClickOutsideV2Directive implements OnInit {
  @Output() clickOutsideV2: EventEmitter<any> = new EventEmitter();

  captured = false;

  constructor(private elRef: ElementRef) { }

  // The second parameter ["$event.target"] is to define which values should be passed to the decoreated method
  // The $event parameter is a MouseEvent, which holds the target element in the target property
  // The onClick method will now be invoked every time a click was performed on the whole document.
  // Due to the use of HostListener, you don’t even need to unbind from the event—Angular is handling everything for you.
  @HostListener("document:click", ["$event.target"])
  onClick(target: any) {
    if (!this.captured) {
      return;
    }

    if (!this.elRef.nativeElement.contains(target)) {
      this.clickOutsideV2.emit();
    }
  }

  ngOnInit() {
    fromEvent(document, "click", { capture: true })
      .pipe(take(1))
      .subscribe(() => (this.captured = true));
  }
}
