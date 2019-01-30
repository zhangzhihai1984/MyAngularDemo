import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.pipe(map(p => p))
      .subscribe(v => console.log('<Route>', '<Param>', v));

    this.route.data.pipe(map(v => v))
      .subscribe(v => console.log('<Route>', '<Data>', v));
  }

  ngOnInit() {
  }

}
