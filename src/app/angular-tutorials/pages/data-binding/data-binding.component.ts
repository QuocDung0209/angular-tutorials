import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  inlineTemplate = `import { Component } from '@angular/core';\n \n@Component({\n  selector: 'app-title',\n  template: '<h1>{{title}}</h1>',\n  styles: ['h1 { font-weight: bold; }']\n})\nexport class TitleComponent {\n  title = 'Component';\n}`;
  externalTemplate = `import { Component } from '@angular/core';\n \n@Component({\n  selector: 'app-title',\n  templateUrl: './title.component.html',\n  styleUrls: ['./title.component.scss']\n})\nexport class TitleComponent {\n  title = 'Component';\n}`;

  constructor() {}

  ngOnInit(): void {}
}
