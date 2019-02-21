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

  menuData1 = {
    $implicit: 'Dialog1',
    items: [
      { name: 'Item1' },
      { name: 'Item2' },
      { name: 'Item3' }
    ]
  }

  menuData2 = {
    ...this.menuData1,
    $implicit: 'Dialog2'
  }

  constructor() { }

  ngOnInit() {
  }
}
