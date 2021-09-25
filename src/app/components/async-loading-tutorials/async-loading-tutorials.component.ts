import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-loading-tutorials',
  templateUrl: './async-loading-tutorials.component.html',
  styleUrls: ['./async-loading-tutorials.component.scss'],
})
export class AsyncLoadingTutorialsComponent implements OnInit {
  title =
    'Hiển thị loading spinner trong suốt quá trình xử lý đồng thời nhiều HTTP request';

  spinnerTemplate = `<div class=\"spinner-backdrop\">\n  <div class=\"spinner\"></div>\n</div>`;
  spinnerCss = `.spinner-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999999999;\n  background-color: rgb(0, 0, 0, 0.5);\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.spinner {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n}\n\n.spinner:after {\n  content: \" \";\n  display: block;\n  width: 80px;\n  height: 80px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 6px solid #fff;\n  border-color: #fff transparent #fff transparent;\n  animation: spinner 1.2s linear infinite;\n}\n\n@keyframes spinner {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}`;
  spinnerService = `import { BehaviorSubject, NEVER, defer } from 'rxjs';\nimport { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';\nimport { finalize, share } from 'rxjs/operators';\n\nimport { SpinnerComponent } from '../components/spinner/spinner.component';\n\n@Injectable({\n  providedIn: 'root',\n})\nexport class SpinnerService {\n  private spinnerElement: any;\n  private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(\n    false\n  );\n  isLoading$ = this._isLoading$.asObservable();\n\n  constructor(\n    private resolver: ComponentFactoryResolver,\n    private injector: Injector\n  ) {}\n\n  setLoading(value: boolean) {\n    this._isLoading$.next(value);\n  }\n\n  public readonly spinner$ = defer(() => {\n    this.show();\n    return NEVER.pipe(\n      finalize(() => {\n        this.hide();\n      })\n    );\n  }).pipe(share());\n\n  private show(): void {\n    console.log('SpinnerOverlayService ~ SHOW spinner...');\n    this._isLoading$.next(true);\n    const componentFactory =\n      this.resolver.resolveComponentFactory(SpinnerComponent);\n    const componentRef = componentFactory.create(this.injector);\n\n    componentRef?.hostView?.detectChanges();\n    this.spinnerElement = componentRef?.location?.nativeElement;\n    document.body.appendChild(this.spinnerElement);\n  }\n\n  private hide(): void {\n    console.log('SpinnerOverlayService ~ HIDE spinner');\n    this._isLoading$.next(false);\n    document.body.removeChild(this.spinnerElement);\n  }\n}`;
  spinnerInterceptor = `import {\n  HttpEvent,\n  HttpHandler,\n  HttpInterceptor,\n  HttpRequest,\n} from '@angular/common/http';\nimport { Injectable } from '@angular/core';\nimport { Observable, Subscription } from 'rxjs';\nimport { finalize } from 'rxjs/operators';\nimport { SpinnerService } from './spinner.service';\n\n@Injectable()\nexport class SpinnerInterceptorService implements HttpInterceptor {\n  constructor(private readonly spinnerService: SpinnerService) {}\n\n  intercept(\n    req: HttpRequest<any>,\n    next: HttpHandler\n  ): Observable<HttpEvent<any>> {\n    let spinnerSubscription: Subscription;\n    if (req.params.get('showLoading')) {\n      spinnerSubscription = this.spinnerOverlayService.spinner$.subscribe();\n    }\n\n    const request = req.clone({\n      params: req.params.delete('showLoading'),\n    });\n\n    return next\n      .handle(request)\n      .pipe(\n        finalize(() => spinnerSubscription && spinnerSubscription.unsubscribe())\n      );\n  }\n}`;
  serviceProvider = `providers: [\n    {\n      provide: HTTP_INTERCEPTORS,\n      useClass: SpinnerInterceptorService,\n      multi: true,\n    },\n  ],`;

  constructor() {}

  ngOnInit(): void {}
}
