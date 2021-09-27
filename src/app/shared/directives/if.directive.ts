import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  _appIf!: boolean;

  @Input()
  set appIf(condition: boolean) {
    this._appIf = condition
    this._updateView();
  }

  constructor(
    private _viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  _updateView() {
    if (this._appIf) {
      this._viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this._viewContainer.clear();
    }
  }
}
