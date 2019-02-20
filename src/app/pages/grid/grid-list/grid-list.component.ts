import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tiles: Tile[] = [
    { text: '1' },
    { text: '2' },
    { text: '3' },
    { text: '4' },
  ];

  tiles2: Tile[] = [
    { text: '1' },
    { text: '2', cols: 2 },
    { text: '3', rows: 2 },
    { text: '4' },
  ];

  tiles3: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: '#673AB7' },
    { text: 'Two', cols: 1, rows: 2, color: '#3F51B5' },
    { text: 'Three', cols: 1, rows: 1, color: '#E91E63' },
    { text: 'Four', cols: 2, rows: 1, color: '#9C27B0' },
  ];
}

export interface Tile {
  text: string;
  color?: string;
  cols?: number;
  rows?: number;
}
