import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.scss']
})
export class AngularFormsComponent implements OnInit {
  title = "Angular Forms";
  isShow = true;

  constructor() { }

  ngOnInit(): void {
  }

  embededProject() {
    this.isShow = false;
    sdk.embedProjectId(
      'angular-template-driven-form',
      'angular-ivy-igfetg',
      {
        openFile: 'src/app/app.component.ts',
        clickToLoad: true,
        hideDevTools: false,
        devToolsHeight: 33,
        height: 500
      }
    );
  }

}
