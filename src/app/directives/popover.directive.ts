import {
  Directive,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  Inject,
  Injector,
  Renderer2,
  ComponentRef,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  NgZone,
  SimpleChanges,
  ChangeDetectorRef,
  ApplicationRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PlacementArray, positionElements } from '../helpers/positioning';
import { PopupService } from '../services/popup.service';
import { PopoverComponent } from '../components/popover/popover.component';
import { listenToTriggers } from '../helpers/triggers';

let nextId = 0;

@Directive({
  selector: '[appPopover]',
  // exportAs: 'appPopover'
})
export class PopoverDirective implements OnInit, OnDestroy, OnChanges {
  // static ngAcceptInputType_autoClose: boolean | string;

  /**
   * If `true`, popover opening and closing will be animated.
   *
   * @since 8.0.0
   */
  @Input() animation: boolean;

  /**
   * Indicates whether the popover should be closed on `Escape` key and inside/outside clicks:
   *
   * * `true` - closes on both outside and inside clicks as well as `Escape` presses
   * * `false` - disables the autoClose feature (NB: triggers still apply)
   * * `"inside"` - closes on inside clicks as well as Escape presses
   * * `"outside"` - closes on outside clicks (sometimes also achievable through triggers)
   * as well as `Escape` presses
   *
   * @since 3.0.0
   */
  @Input() autoClose: boolean | 'inside' | 'outside';

  /**
   * The string content or a `TemplateRef` for the content to be displayed in the popover.
   *
   * If the title and the content are falsy, the popover won't open.
   */
  @Input() appPopover: string | TemplateRef<any> | null | undefined;

  /**
   * The title of the popover.
   *
   * If the title and the content are falsy, the popover won't open.
   */
  @Input() popoverTitle: string | TemplateRef<any> | null | undefined;

  /**
   * The preferred placement of the popover.
   *
   * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
   * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
   * `"right-bottom"`
   *
   * Accepts an array of strings or a string with space separated possible values.
   *
   * The default order of preference is `"auto"` (same as the sequence above).
   *
   * Please see the [positioning overview](#/positioning) for more details.
   */
  @Input() placement: PlacementArray;

  /**
   * Specifies events that should trigger the tooltip.
   *
   * Supports a space separated list of event names.
   * For more details see the [triggers demo](#/components/popover/examples#triggers).
   */
  @Input() triggers: string;

  /**
   * A selector specifying the element the popover should be appended to.
   *
   * Currently only supports `body`.
   */
  @Input() container: string;

  /**
   * If `true`, popover is disabled and won't be displayed.
   *
   * @since 1.1.0
   */
  @Input() disablePopover: boolean;

  /**
   * An optional class applied to the popover window element.
   *
   * @since 2.2.0
   */
  @Input() popoverClass: string;

  /**
   * The opening delay in ms. Works only for "non-manual" opening triggers defined by the `triggers` input.
   *
   * @since 4.1.0
   */
  @Input() openDelay: number;

  /**
   * The closing delay in ms. Works only for "non-manual" opening triggers defined by the `triggers` input.
   *
   * @since 4.1.0
   */
  @Input() closeDelay: number;

  /**
   * An event emitted when the popover opening animation has finished. Contains no payload.
   */
  @Output() shown = new EventEmitter<void>();

  /**
   * An event emitted when the popover closing animation has finished. Contains no payload.
   *
   * At this point popover is not in the DOM anymore.
   */
  @Output() hidden = new EventEmitter<void>();

  private _appPopoverId = `app-popover-${nextId++}`;
  private _popupService: PopupService<PopoverComponent>;
  private _popoverComponentRef: ComponentRef<PopoverComponent> | null = null;
  private _unregisterListenersFn: any;
  private _zoneSubscription: any;
  private _isDisabled(): boolean {
    if (this.disablePopover) {
      return true;
    }
    if (!this.appPopover && !this.popoverTitle) {
      return true;
    }
    return false;
  }

  constructor(
    private _elementRef: ElementRef<HTMLElement>, private _renderer: Renderer2, injector: Injector,
    componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef,
    private _ngZone: NgZone, @Inject(DOCUMENT) private _document: any, private _changeDetector: ChangeDetectorRef,
    applicationRef: ApplicationRef) {
    this.animation = true;
    this.autoClose = true;
    this.placement = 'auto';
    this.triggers = 'click';
    this.container = '';
    this.disablePopover = false;
    this.popoverClass = '';
    this.openDelay = 0;
    this.closeDelay = 0;
    this._popupService = new PopupService<PopoverComponent>(
      PopoverComponent, injector, viewContainerRef, _renderer, this._ngZone, componentFactoryResolver,
      applicationRef);

    this._zoneSubscription = _ngZone.onStable.subscribe(() => {
      if (this._popoverComponentRef) {
        positionElements(
          this._elementRef.nativeElement, this._popoverComponentRef.location.nativeElement, this.placement,
          this.container === 'body', 'bs-popover');
      }
    });
  }

  /**
   * Opens the popover.
   *
   * This is considered to be a "manual" triggering.
   * The `context` is an optional value to be injected into the popover template when it is created.
   */
  open(context?: any) {
    if (!this._popoverComponentRef && !this._isDisabled()) {
      // this type assertion is safe because otherwise _isDisabled would return true
      const { windowRef, transition$ } =
        this._popupService.open(this.appPopover as (string | TemplateRef<any>), context, this.animation);
      this._popoverComponentRef = windowRef;
      if (this._popoverComponentRef) {
        this._popoverComponentRef.instance.animation = this.animation;
        this._popoverComponentRef.instance.title = this.popoverTitle;
        this._popoverComponentRef.instance.context = context;
        this._popoverComponentRef.instance.popoverClass = this.popoverClass;
        this._popoverComponentRef.instance.id = this._appPopoverId;
      }

      this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._appPopoverId);

      if (this.container === 'body') {
        this._document.querySelector(this.container).appendChild(this._popoverComponentRef && this._popoverComponentRef.location.nativeElement);
      }

      // We need to detect changes, because we don't know where .open() might be called from.
      // Ex. opening popover from one of lifecycle hooks that run after the CD
      // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception
      this._popoverComponentRef && this._popoverComponentRef.changeDetectorRef.detectChanges();

      // We need to mark for check, because popover won't work inside the OnPush component.
      // Ex. when we use expression like `{{ popover.isOpen() : 'opened' : 'closed' }}`
      // inside the template of an OnPush component and we change the popover from
      // open -> closed, the expression in question won't be updated unless we explicitly
      // mark the parent component to be checked.
      this._popoverComponentRef && this._popoverComponentRef.changeDetectorRef.markForCheck();

      // ngbAutoClose(
      //   this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden,
      //   [this._popoverComponentRef && this._popoverComponentRef.location.nativeElement]);

      transition$.subscribe(() => this.shown.emit());
    }
  }

  /**
   * Closes the popover.
   *
   * This is considered to be a "manual" triggering of the popover.
   */
  close() {
    if (this._popoverComponentRef) {
      this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
      this._popupService.close(this.animation).subscribe(() => {
        this._popoverComponentRef = null;
        this.hidden.emit();
        this._changeDetector.markForCheck();
      });
    }
  }

  /**
   * Toggles the popover.
   *
   * This is considered to be a "manual" triggering of the popover.
   */
  toggle(): void {
    if (this._popoverComponentRef) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Returns `true`, if the popover is currently shown.
   */
  isOpen(): boolean { return this._popoverComponentRef != null; }

  ngOnInit() {
    this._unregisterListenersFn = listenToTriggers(
      this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this),
      this.close.bind(this), +this.openDelay, +this.closeDelay);
  }

  ngOnChanges({ ngbPopover, popoverTitle, disablePopover, popoverClass }: SimpleChanges) {
    if (popoverClass && this.isOpen()) {
      this._popoverComponentRef!.instance.popoverClass = popoverClass.currentValue;
    }
    // close popover if title and content become empty, or disablePopover set to true
    if ((ngbPopover || popoverTitle || disablePopover) && this._isDisabled()) {
      this.close();
    }
  }

  ngOnDestroy() {
    this.close();
    // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
    // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
    if (this._unregisterListenersFn) {
      this._unregisterListenersFn();
    }
    this._zoneSubscription.unsubscribe();
  }
}