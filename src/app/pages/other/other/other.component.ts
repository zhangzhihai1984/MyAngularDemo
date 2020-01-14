import { Component, OnInit, ViewChild } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  @ViewChild('highlightRef', { read: HighlightDirective, static: false }) dRef: HighlightDirective

  ngIfCondition = true

  items = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' }
  ]

  trackById = (index: number, item: { id: number, name: string }) => item.id

  fn = () => console.log('Fn');

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.dRef.showLog()
    }, 0);
  }

}
