import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-tutorial',
  templateUrl: './pipes-tutorial.component.html',
  styleUrls: ['./pipes-tutorial.component.scss'],
})
export class PipesTutorialComponent implements OnInit {
  asSyntax = `<div *ngIf=\"(hounds | async) as breeds\">\n  <ul>\n    <li *ngFor=\"let breed of breeds.message\">{{breed}}</li>\n  </ul> \n</div>`;
  usingShareReplay = `<div *ngIf=\"(obsValue | async); else elseBlock\">\n  {{ obsValue | async}}\n</div>`;
  temparaturePipe = `import {Pipe, PipeTransform} from '@angular/core';\n \n@pipe({\n    name: 'tempConverter'\n})\nexport class TempConverterPipe implements PipeTransform {\n    transform(value: number, unit: string) {\n        if(value && !isNaN(value)) {\n            if (unit === 'C') {\n                var temperature = (value - 32) /1.8 ;\n                return temperature.toFixed(2);\n            } else if (unit === 'F'){\n                var temperature = (value * 1.8 ) + 32\n                return temperature.toFixed(2);\n            }\n        }\n        return;\n    }\n }`;

  constructor() {}

  ngOnInit(): void {}
}
