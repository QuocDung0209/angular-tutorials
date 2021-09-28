import { AngularFormsComponent } from 'src/app/angular-tutorials/pages/angular-forms/angular-forms.component';
import { AsyncLoadingTutorialsComponent } from 'src/app/angular-tutorials/pages/async-loading-tutorials/async-loading-tutorials.component';
import { DataBindingComponent } from 'src/app/angular-tutorials/pages/data-binding/data-binding.component';
import { DependencyInjectionComponent } from 'src/app/angular-tutorials/pages/dependency-injection/dependency-injection.component';
import { DirectivesTutorialComponent } from 'src/app/angular-tutorials/pages/directives-tutorial/directives-tutorial.component';
import { DockerContainerComponent } from 'src/app/angular-tutorials/pages/docker-container/docker-container.component';
import { FolderStructureComponent } from 'src/app/angular-tutorials/pages/folder-structure/folder-structure.component';
import { InitialProjectComponent } from 'src/app/angular-tutorials/pages/initial-project/initial-project.component';
import { OverviewComponent } from 'src/app/angular-tutorials/pages/overview/overview.component';
import { ViewEncapsulationComponent } from 'src/app/angular-tutorials/pages/view-encapsulation/view-encapsulation.component';

export const TUTORIALS = [
  {
    title: 'Tìm hiểu Angular Framework',
    routerLink: '/angular-tutorials/getting-started',
    path: 'getting-started',
    component: OverviewComponent,
  },
  {
    title: 'Angular modules and Best Practices Folder Structure',
    routerLink: '/angular-tutorials/angular-modules',
    path: 'angular-modules',
    component: FolderStructureComponent,
  },
  {
    title: 'Tạo và cấu hình project Angular',
    routerLink: '/angular-tutorials/initialize-angular-project',
    path: 'initialize-angular-project',
    component: InitialProjectComponent,
  },
  {
    title: 'Components và Data Binding',
    routerLink: '/angular-tutorials/data-binding',
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    title: 'Directives and Custom Directive',
    routerLink: '/angular-tutorials/directives',
    path: 'directives',
    component: DirectivesTutorialComponent,
  },
  {
    title: 'View Encapsulation',
    routerLink: '/angular-tutorials/view-encapsulation',
    path: 'view-encapsulation',
    component: ViewEncapsulationComponent,
  },
  {
    title: 'Service và Dependency injection',
    routerLink: '/angular-tutorials/service-and-dependency-injection',
    path: 'service-and-dependency-injection',
    component: DependencyInjectionComponent,
  },
  {
    title: 'Angular Forms',
    routerLink: '/angular-tutorials/angular-forms',
    path: 'angular-forms',
    component: AngularFormsComponent,
  },
  {
    title:
      'Hiển thị loading spinner trong suốt quá trình xử lý đồng thời nhiều HTTP request',
    routerLink: '/angular-tutorials/async-loading-spinner',
    path: 'async-loading-spinner',
    component: AsyncLoadingTutorialsComponent,
  },
  {
    title: 'Build và deploy Angular project với Docker',
    routerLink: '/angular-tutorials/docker-build-deploy',
    path: 'docker-build-deploy',
    component: DockerContainerComponent,
  },
];
