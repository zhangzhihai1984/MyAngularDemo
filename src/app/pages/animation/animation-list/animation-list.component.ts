import { Component, OnInit } from '@angular/core';
import { openCloseAnim, insertRemoveAnim, openCloseAnim2 } from '../animation-util';

@Component({
  selector: 'app-animation-list',
  templateUrl: './animation-list.component.html',
  styleUrls: ['./animation-list.component.scss'],
  animations: [
    openCloseAnim,
    insertRemoveAnim,
    openCloseAnim2
  ]
})
export class AnimationListComponent implements OnInit {
  currentState: string = 'open';
  showSecond: boolean = false;
  showThird: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.currentState = this.currentState == 'open' ? 'close' : 'open';
  }

  toggle2() {
    this.showSecond = !this.showSecond;
  }

  toggle3() {
    this.showThird = !this.showThird;
  }
}
