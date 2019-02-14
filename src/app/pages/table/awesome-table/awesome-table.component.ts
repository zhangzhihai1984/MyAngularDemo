import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PeriodicElement } from '../table.model';
import { Observable, Subscription, of } from 'rxjs';
import { TableColumnConfig } from '../table.config';

@Component({
  selector: 'app-awesome-table',
  templateUrl: './awesome-table.component.html',
  styleUrls: ['./awesome-table.component.scss']
})
export class AwesomeTableComponent implements OnInit, OnDestroy {
  // @Input() data: PeriodicElement[];
  // @Input() displayedColumns: string[];
  displayedColumns: string[];

  @Input() data$: Observable<PeriodicElement[]>;
  @Input() columnConfigs: TableColumnConfig[];

  dataSource: MatTableDataSource<PeriodicElement> = new MatTableDataSource();

  private subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    this.subscription.add(
      this.data$.subscribe(data => {
        this.dataSource.data = data;
      })
    );

    this.displayedColumns = this.columnConfigs.map(columnConfig => columnConfig.name);
    this.displayedColumns = this.displayedColumns.filter(v => v !== 'symbol');
  }

  ngOnDestroy() {
    if (!this.subscription.closed) {
      this.subscription.unsubscribe();
    }
    this.subscription = Subscription.EMPTY;
  }
}