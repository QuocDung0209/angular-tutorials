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
  valueChangesControl = `this.contactForm\n      .get('firstname')\n      .valueChanges.subscribe((selectedValue) => {\n        console.log('firstname value changed');\n        console.log(selectedValue); //latest value of firstname\n        console.log(this.contactForm.get('firstname').value); //latest value of firstname\n        console.log(this.contactForm.value); //still shows the old first name\n      });`;
  valueChangesForm = `this.contactForm.valueChanges.subscribe((objectValue) => {\n  console.log('form value changed');\n  console.log(objectValue);\n});`;
  valueChangesControlTimeout = `    this.contactForm\n      .get('firstname')\n      .valueChanges.subscribe((selectedValue) => {\n        console.log('firstname value changed');\n        console.log(selectedValue); //latest value of firstname\n        console.log(this.contactForm.get('firstname').value); //latest value of firstname\n        console.log(this.contactForm.value); //still shows the old first name\n\n        setTimeout(() => {\n          console.log(this.contactForm.value); //shows the latest first name\n        });\n      });`;

  getValueChanges = 'this.fNameChange = this.reactiveForm.get(\"firstname\").valueChanges.subscribe(x => {\n   console.log(x);\n})';

  setValidators = 'setValidator() {\n  this.reactiveForm.get(\"firstname\").setValidators([Validators.required, Validators.minLength(5)]);\n  this.reactiveForm.get(\"firstname\").updateValueAndValidity();\n}';
  clearValidators = 'clearValidation() {\n   this.reactiveForm.get(\"firstname\").clearValidators();\n   this.reactiveForm.get(\"firstname\").updateValueAndValidity();\n}';

  getErrors = `getErrors() {\n \n  const controlErrors: ValidationErrors = this.reactiveForm.get(\"firstname\").errors;\n  if (controlErrors) {\n    Object.keys(controlErrors).forEach(keyError => {\n      console.log(\"firtname \"+ ' '+keyError);\n    });\n  }\n}`;
  setErrors = `setErrors() {\n    this.reactiveForm.get(\"firstname\").setErrors( {customerror:'custom error'});\n}`;


  createFormGroup = `<form>\n  First Name : <input type=\"text\" name=\"firstname\" /> \n  Last Name  : <input type=\"text\" name=\"lastname\" /> \n  Email      : <input type=\"text\" name=\"email\" /> \n</form>`;

  addControl = `addControl() {\n    this.middleName = new FormControl('', [Validators.required]);\n    this.reactiveForm.addControl(\"middleName\",this.middleName);\n  }`;
  registerControl = `registerControl() {\n  this.middleName = new FormControl('', [Validators.required]);\n  this.reactiveForm.addControl(\"middleName\",this.middleName);\n}`;
  removeControl = `remodeControl() {\n  this.reactiveForm.removeControl(\"middleName\");\n}`;
  setControl = `setControl() {\n  this.middleName = new FormControl('test', [Validators.required]);\n  this.reactiveForm.setControl(\"middleName\",this.middleName);\n}`;
  containsControl = `containsControl() {\n  console.log(this.reactiveForm.contains(\"middleName\"));\n}`;

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
