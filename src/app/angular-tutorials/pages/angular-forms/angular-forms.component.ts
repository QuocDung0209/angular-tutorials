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

  formArrayModel = `skillsForm: FormGroup;\n \n  constructor(private fb:FormBuilder) {\n \n    this.skillsForm = this.fb.group({\n      name: '',\n      skills: this.fb.array([]) ,\n    });\n  \n  }`;
  getterFormArray = `get skills() : FormArray {\n  return this.skillsForm.get(\"skills\") as FormArray\n}`;
  newElementFormArray = `newSkill(): FormGroup {\n   return this.fb.group({\n     skill: '',\n     exp: '',\n   })\n}`;
  pushElementToArray = `addSkills() {\n   this.skills.push(this.newSkill());\n}`;
  removeElementFromArray = `removeSkill(i:number) {\n  this.skills.removeAt(i);\n}`;
  submitFormArray = `onSubmit() {\n   console.log(this.skillsForm.value);\n }`;
  bindingFormArray = `<div formArrayName=\"skills\">\n  <div *ngFor=\"let skill of skills.controls; let i=index\">\n \n  </div>\n</div>`;
  finalTemplateFormArray = `Skills:\n  <div formArrayName=\"skills\">\n    <div *ngFor=\"let skill of skills.controls; let i=index\">\n      <div [formGroupName]=\"i\">\n        {{i}}\n        skill name :\n        <input type=\"text\" formControlName=\"skill\">\n        exp:\n        <input type=\"text\" formControlName=\"exp\">\n \n        <button (click)=\"removeSkill(i)\">Remove</button>\n      </div>\n    </div>\n  </div>`;

  getterFormControl = `get firstname() {\n   return this.contactForm.get('firstname');\n}`;
  showErrorMessages = `<div\n    *ngIf=\"!firstname?.valid && (firstname?.dirty ||firstname?.touched)\">\n    <div [hidden]=\"!firstname.errors.required\">\n      First Name is required\n    </div>\n    <div [hidden]=\"!firstname.errors.minlength\">\n      Min Length is 10\n    </div>\n  </div>`;
  showErrorMessagesAnother = `<div\n    *ngIf=\"!contactForm.controls.firstname?.valid && (contactForm.controls.firstname?.dirty\n    ||contactForm.controls.firstname?.touched)\">\n      First Name is not valid\n  </div>`;

  validatorFn = 'interface ValidatorFn {\n  (control: AbstractControl): ValidationErrors | null\n}';
  exampleValidator = `export function gte(control: AbstractControl): ValidationErrors | null {\n    const v:number=+control.value; // Get value from control\n \n    if (...) {\n      // Add logic here\n      return { 'gte': true, 'requiredValue': 10 }\n    }      \n \n    return null\n}`;
  customValidatorParams = `export function gte(val: number): ValidatorFn {\n \n  return (control: AbstractControl): ValidationErrors | null => {\n    let v: number = +control.value; // Get value from control\n \n    if (...) {\n      // Add validation logic\n      return { 'gte': true, 'requiredValue': val }\n    }      \n      \n    return null;\n  }\n}`;

  asyncValidatorFn = `interface AsyncValidatorFn {\n  (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>\n}`;
  asyncValidatorExample = `import { AbstractControl, ValidationErrors } from '@angular/forms'\nimport { Observable, of } from 'rxjs';\n \nexport function gte(control: AbstractControl): Observable<ValidationErrors> | null {\n    const v:number=+control.value; \n \n    if (...) {\n      // Add validation logic\n      return of({ 'gte': true, 'requiredValue': 10 });\n    } \n \n    return of(null);\n}`;
  asyncValidatorHttp = `import { AbstractControl, ValidationErrors } from '@angular/forms'\nimport { Observable, pipe } from 'rxjs';\nimport { map, debounceTime } from 'rxjs/operators';\n \nexport function validate(control: AbstractControl): Observable<ValidationErrors> | null {\n  const value: string = control.value;\n \n  return this.http.get(this.baseURL + 'checkIfValid/?value=' + value)\n    .pipe(\n      debounceTime(500),\n      map( (data:any) =>  {\n          if (!data.isValid) return ({ 'InValid': true })\n      })\n    )\n  \n}`;

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
