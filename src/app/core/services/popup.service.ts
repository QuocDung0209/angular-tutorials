import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  NgZone,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, take, tap } from 'rxjs/operators';

import { ngbRunTransition } from 'src/app/shared/helpers/transition';

export class ContentRef {
  constructor(
    public nodes: any[],
    public viewRef?: ViewRef,
    public componentRef?: ComponentRef<any>
  ) {}
}

export class PopupService<T> {
  private _windowRef: ComponentRef<T> | null = null;
  private _contentRef: ContentRef | null = null;

  constructor(
    private _type: any,
    private _injector: Injector,
    private _viewContainerRef: ViewContainerRef,
    private _renderer: Renderer2,
    private _ngZone: NgZone,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _applicationRef: ApplicationRef
  ) {}

  open(
    content?: string | TemplateRef<any>,
    context?: any,
    animation = false
  ): { windowRef: ComponentRef<T>; transition$: Observable<void> } {
    if (!this._windowRef) {
      this._contentRef = this._getContentRef(content, context);
      // Instantiates a single component and inserts its host view into view container.
      this._windowRef = this._viewContainerRef.createComponent(
        this._componentFactoryResolver.resolveComponentFactory<T>(this._type),
        this._viewContainerRef.length,
        this._injector,
        this._contentRef.nodes
      );
    }

    const { nativeElement } = this._windowRef.location;
    const transition$ = this._ngZone.onStable.pipe(
      // take the first emitted value then complete
      // Reference: https://www.learnrxjs.io/learn-rxjs/operators/filtering/take
      take(1),
      mergeMap(() =>
        ngbRunTransition(
          this._ngZone,
          nativeElement,
          ({ classList }) => classList.add('show'),
          { animation, runningTransition: 'continue' }
        )
      )
    );

    return { windowRef: this._windowRef, transition$ };
  }

  close(animation = false): Observable<void> {
    if (!this._windowRef) {
      return of(undefined);
    }

    return ngbRunTransition(
      this._ngZone,
      this._windowRef.location.nativeElement,
      ({ classList }) => classList.remove('show'),
      { animation, runningTransition: 'stop' }
    ).pipe(
      tap(() => {
        if (this._windowRef) {
          // this is required because of the container='body' option
          this._viewContainerRef.remove(
            this._viewContainerRef.indexOf(this._windowRef.hostView)
          );
          this._windowRef = null;
        }
        if (this._contentRef?.viewRef) {
          this._applicationRef.detachView(this._contentRef.viewRef);
          this._contentRef.viewRef.destroy();
          this._contentRef = null;
        }
      })
    );
  }

  private _getContentRef(
    content?: string | TemplateRef<any>,
    context?: any
  ): ContentRef {
    if (!content) {
      // If content is false
      return new ContentRef([]);
    } else if (content instanceof TemplateRef) {
      // Instantiates an embedded view and return a reference as ViewRef
      const viewRef = content.createEmbeddedView(context);
      // ApplicationRef contains reference to the root view and can be used to manually run change detection using tick function.
      // But since this component is not child of any other component, you have to manually attach it to ApplicationRef so you get change detection.
      // Attach the view to the ApplicationRef so that you get change detection. You will still have no Input and ngOnChanges operations, but the DOM update will be working fine.
      this._applicationRef.attachView(viewRef);
      // Return the root node under which it should be added.
      return new ContentRef([viewRef.rootNodes], viewRef);
    } else {
      // If content is a string
      return new ContentRef([[this._renderer.createText(`${content}`)]]);
    }
  }
}
