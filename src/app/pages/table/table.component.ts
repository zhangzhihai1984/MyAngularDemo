import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { PeriodicElement, ELEMENT_DATA } from './table.model';
import { Observable, of } from 'rxjs';
import { TableColumnConfig } from './table.config';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data$: Observable<PeriodicElement[]> = of(ELEMENT_DATA);

  columnConfigs: TableColumnConfig[] = [
    { name: 'position', header: 'ID', sortable: true },
    { name: 'name', header: 'Name', sortable: true },
    { name: 'weight', header: 'Weight', sortable: true },
    { name: 'symbol', header: 'Symbol', sortable: true }
  ];

  filterValue: string;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.pipe(map(p => p))
      .subscribe(v => console.log('<Route>', '<Param>', v));

    this.route.data.pipe(map(v => v))
      .subscribe(v => console.log('<Route>', '<Data>', v));
  }

  ngOnInit() {
  }
}