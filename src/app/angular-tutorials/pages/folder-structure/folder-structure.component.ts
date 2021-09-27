import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder-structure',
  templateUrl: './folder-structure.component.html',
  styleUrls: ['./folder-structure.component.scss']
})
export class FolderStructureComponent implements OnInit {
  title = "Angular modules và folder structure best practices";

  constructor() { }

  ngOnInit(): void {
  }

}
