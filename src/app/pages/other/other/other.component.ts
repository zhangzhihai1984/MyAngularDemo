import { Component, OnInit, ViewChild } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('<Route>', '<Snapshot>', '<Param>', route.snapshot.paramMap.get('id'));

    this.route.paramMap.pipe()
      .subscribe(v => console.log(`<Route> <Param> ${v.get('id')} ${v.get('id2')}`))

    this.route.data.subscribe(v => console.log('<Route>', '<Data>', v))
  }

  navigate() {
    this.router.navigate(['11'], { relativeTo: this.route })
  }

  ngOnInit() {
    setTimeout(() => {
      this.dRef.showLog()
    }, 0);
  }

}
