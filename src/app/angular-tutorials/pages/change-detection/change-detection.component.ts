import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
})
export class ChangeDetectionComponent implements OnInit {
  propertyBinding =
    '@Component({\n  template: `\n    <h1>{{firstname}} {{lastname}}</h1>\n    <button (click)="changeName()">Change name</button>\n  `\n})\nclass MyApp {\n  title = "Change detection";\n  firstname:string = "Nguyen";\n  lastname:string = "Kenji";\n\n  changeName() {\n    this.firstname = "Quoc";\n    this.lastname = "Dung";\n  }\n}';

  applicationRef = `// very simplified version of actual source\nclass ApplicationRef {\n\n  changeDetectorRefs:ChangeDetectorRef[] = [];\n\n  constructor(private zone: NgZone) {\n    this.zone.onTurnDone\n      .subscribe(() => this.zone.run(() => this.tick());\n  }\n\n  tick() {\n    this.changeDetectorRefs\n      .forEach((ref) => ref.detectChanges());\n  }\n}`;

  constructor() {}

  ngOnInit(): void {}
}
