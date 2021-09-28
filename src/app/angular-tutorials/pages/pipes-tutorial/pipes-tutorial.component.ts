import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-tutorial',
  templateUrl: './pipes-tutorial.component.html',
  styleUrls: ['./pipes-tutorial.component.scss'],
})
export class PipesTutorialComponent implements OnInit {
  asSyntax = `<div *ngIf=\"(hounds | async) as breeds\">\n  <ul>\n    <li *ngFor=\"let breed of breeds.message\">{{breed}}</li>\n  </ul> \n</div>`;
  usingShareReplay = `<div *ngIf=\"(obsValue | async); else elseBlock\">\n  {{ obsValue | async}}\n</div>`;

  constructor() {}

  ngOnInit(): void {}
}
