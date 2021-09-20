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
  isActive = false;
  tutorials: any = TUTORIALS;
  codeSnippets: any = CODE_SNIPPETS;
  menuList = this.tutorials;

  ngOnInit() {

  }

  onOutsideClick() {
    this.isOpen = false;
  }
}
