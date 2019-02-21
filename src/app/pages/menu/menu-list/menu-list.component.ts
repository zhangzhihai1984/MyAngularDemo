import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @ViewChild(MatMenu) matMenu: MatMenu;

  constructor() { }

  ngOnInit() {
    this.matMenu.yPosition = 'above';
  }

}
