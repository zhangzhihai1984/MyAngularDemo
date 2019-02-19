import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo-item',
  templateUrl: './demo-item.component.html',
  styleUrls: ['./demo-item.component.scss']
})
export class DemoItemComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
