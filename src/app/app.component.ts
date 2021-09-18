import { Component, OnInit } from '@angular/core';
import { CODE_SNIPPETS } from './constants/code-snippets-routes.constant';
import { TUTORIALS } from './constants/tutorials-routes.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isOpen = false;
  tutorials = TUTORIALS;
  codeSnippets = CODE_SNIPPETS;
  menuList = this.tutorials;

  ngOnInit() {

  }
}
