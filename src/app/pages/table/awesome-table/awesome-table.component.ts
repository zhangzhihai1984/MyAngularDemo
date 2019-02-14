import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PeriodicElement } from '../table.model';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-awesome-table',
  templateUrl: './awesome-table.component.html',
  styleUrls: ['./awesome-table.component.scss']
})
export class AwesomeTableComponent implements OnInit, OnDestroy {
  // @Input() data: PeriodicElement[];
  // @Input() displayedColumns: string[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  @Input() data$: Observable<PeriodicElement[]>;
  dataSource: MatTableDataSource<PeriodicElement> = new MatTableDataSource();

  private subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    this.subscription.add(
      this.data$.subscribe(data => {
        this.dataSource.data = data;
      })
    );
  }

  ngOnDestroy() {
    if (!this.subscription.closed) {
      this.subscription.unsubscribe();
    }
    this.subscription = Subscription.EMPTY;
  }
}