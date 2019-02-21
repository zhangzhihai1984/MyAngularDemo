import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  xPosition = 'after';
  yPosition = 'below';
  overlapTrigger = false;


  constructor() { }

  ngOnInit() {
  }
}
