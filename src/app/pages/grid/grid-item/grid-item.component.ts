import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Tile } from '../grid.component';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {

  @Input() tiles: Tile[];
  @Input() cols: number = 2;
  @Input() rowHeight: string = "1:1";
  @Input() tooltip: string;
  @Input() height: string;
  rowspan: number = 1;
  // @Input() colspan: number = 1;
  // @Input() rowspan: number = 1;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
  }

}
