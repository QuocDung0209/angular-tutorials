import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-stringify',
  templateUrl: './json-stringify.component.html',
  styleUrls: ['./json-stringify.component.scss']
})
export class JsonStringifyComponent implements OnInit {
  text = '';
  stringifiedText = '';

  constructor() { }

  ngOnInit(): void {
  }

  stringify(value: string) {
    this.text = value;
    this.stringifiedText = JSON.stringify(value);
  }

}
