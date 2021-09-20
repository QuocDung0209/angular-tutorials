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
  statusControl = 'this.reactiveForm.get(\"firstname\").statusChanges.subscribe(newStatus=> {\n   console.log(newStatus)                                    //latest status\n   console.log(this.reactiveForm.get(\"firstname\").status)   //latest status\n   console.log(this.reactiveForm.status)                    //Previous status\n      \n   // waiting for the next tick\n   setTimeout(() => {\n     console.log(this.reactiveForm.status)                  //latest status\n   })\n})';
  statusForm = `this.reactiveForm.statusChanges.subscribe(newStaus => {\n    console.log('form Status changed event')\n    console.log(newStaus)\n})`;

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
