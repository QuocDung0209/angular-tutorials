import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-directive',
  templateUrl: './tooltip-directive.component.html',
  styleUrls: ['./tooltip-directive.component.scss']
})
export class TooltipDirectiveComponent implements OnInit {
  title: string = "Tooltip - Attribute Directive";

  constructor() { }

  ngOnInit(): void {
  }

}
