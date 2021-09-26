import { AngularFormsComponent } from '../angular-tutorials/pages/angular-forms/angular-forms.component';
import { AsyncLoadingTutorialsComponent } from '../angular-tutorials/pages/async-loading-tutorials/async-loading-tutorials.component';

export const TUTORIALS = [
  {
    title: 'Bắt đầu với Angular',
    routerLink: '/getting-started',
    path: 'angular-forms',
    component: AngularFormsComponent,
  },
  {
    title: 'Hướng dẫn tạo và chạy project Angular',
    routerLink: '/initialize-angular-project',
    path: 'angular-forms',
    component: AngularFormsComponent,
  },
  {
    title: 'Data Binding',
    routerLink: '/data-binding',
    path: 'angular-forms',
    component: AngularFormsComponent,
  },
  {
    title: 'Directive',
    routerLink: '/directive',
    path: 'angular-forms',
    component: AngularFormsComponent,
  },
  {
    title: 'Angular Forms',
    routerLink: '/angular-forms',
    path: 'angular-forms',
    component: AngularFormsComponent,
  },
  {
    title:
      'Hiển thị loading spinner trong suốt quá trình xử lý đồng thời nhiều HTTP request',
    routerLink: '/async-loading-spinner',
    path: 'async-loading-spinner',
    component: AsyncLoadingTutorialsComponent,
  },
];
