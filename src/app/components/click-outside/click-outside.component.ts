import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-outside',
  templateUrl: './click-outside.component.html',
  styleUrls: ['./click-outside.component.scss']
})
export class ClickOutsideComponent implements OnInit {
  title = "Create clickOutside Directive";
  opened: boolean = false;
  clicked: string = 'Not yet';

  constructor() { }

  ngOnInit(): void {
  }

  clickOutside(value: string) {
    this.clicked = value;
  }

  clickOutsideWithButton() {
    this.opened = !this.opened;
    console.log("clicked outside");
  }

}
