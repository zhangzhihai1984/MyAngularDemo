import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { PeriodicElement, ELEMENT_DATA } from '../table.model';
import { Observable, of } from 'rxjs';
import { TableColumnConfig } from '../table.config';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  data$: Observable<PeriodicElement[]> = of(ELEMENT_DATA);

  columnConfigs: TableColumnConfig[] = [
    { name: 'position', header: 'ID', sortable: true, filterable: true, stickyStart: true },
    { name: 'name', header: 'Name', sortable: true, filterable: true, stickyStart: false },
    { name: 'zh', header: 'ZH', sortable: true, filterable: true },
    { name: 'weight', header: 'Weight', sortable: true, filterable: true },
    { name: 'symbol', header: 'Symbol', sortable: false, filterable: false, stickyEnd: false },
    { name: 'discoverer', header: 'Discoverer', sortable: false, filterable: false, stickyEnd: false }
  ];

  sortDisabled = false;
  contentAlign = 'center';
  border = 'all';
  elevation = 8;
  stickyHeaderDisabled = false;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.pipe(map(p => p))
      .subscribe(v => console.log('<Route>', '<Param>', v));

    this.route.data.pipe(map(v => v))
      .subscribe(v => console.log('<Route>', '<Data>', v));
  }

  ngOnInit() {
  }
}