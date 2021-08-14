import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Tooltip - Attribute Directive";
  test = `<img src=nonexistentimage onerror="alert('Hello there')" />`;
}
