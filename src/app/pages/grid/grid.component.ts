import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

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
  ]
}

export interface Tile {
  text: string;
  color?: string;
  cols?: number;
  rows?: number;
}
