import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-bootstrap-forms',
  templateUrl: './bootstrap-forms.component.html',
  styleUrls: ['./bootstrap-forms.component.scss']
})
export class BootstrapFormsComponent implements OnInit {
  title: string = "Tooltip CSS and Popper.js";

  constructor() { }

  ngOnInit(): void {
  }

  embededProject() {
    sdk.embedProjectId(
      'invalid-tooltip-project',
      'angular-ivy-3me5wv',
      {
        openFile: 'src/app/app.component.ts',
        clickToLoad: true,
        hideDevTools: false,
        devToolsHeight: 33,
        height: '95%'
      }
    );
  }

}
