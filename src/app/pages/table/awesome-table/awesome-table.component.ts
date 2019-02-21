import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import {
  MatTableDataSource,
  MatPaginator,
  PageEvent,
  MatSort,
  Sort
} from '@angular/material';
import { TableCellModel } from '../table.model';
import { Observable, Subscription, of } from 'rxjs';
import { TableColumnConfig } from '../table.config';

@Component({
  selector: 'app-awesome-table',
  templateUrl: './awesome-table.component.html',
  styleUrls: ['./awesome-table.component.scss']
})
export class AwesomeTableComponent implements OnInit, OnDestroy {

  @Input() data$: Observable<TableCellModel[]>;
  @Input() columnConfigs: TableColumnConfig[];

  @Input() showPaginator = true;
  @Input() pageSize = 5;
  @Input() pageSizeOptions = [5, 10, 20];

  @Input() sortable = false;

  @Input() set filterValue(filter: string) {
    this.dataSource.filter = filter;
  }

  @Output() pageChanaged = new EventEmitter<PageEvent>();
  @Output() sortChanged = new EventEmitter<Sort>();

  dataSource: MatTableDataSource<TableCellModel> = new MatTableDataSource();
  displayedColumns: string[];

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    this.checkConfig();

    this.subscription.add(
      this.data$.subscribe(data => {
        this.dataSource.data = data;
      })
    );

    this.displayedColumns = this.columnConfigs.map(columnConfig => columnConfig.name);
    // this.displayedColumns = this.displayedColumns.filter(v => v !== 'symbol');
    this.displayedColumns = [...this.displayedColumns, 'testID']

    if (this.showPaginator)
      this.dataSource.paginator = this.paginator;

    if (this.sortable)
      this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (data, sortHeaderId: string) => {
      if (sortHeaderId == 'testID')
        return data['name'];
      return data[sortHeaderId];
    }

    // this.dataSource.filterPredicate = (data, filter: string) => {
    //   console.log('<Filter>', JSON.stringify(data));
    //   if (JSON.stringify(data).includes('H'))
    //     return true;
    //   return false;
    // }
  }

  private checkConfig() {
    if (!this.data$) {
      throw Error('Input property data$ must be provided');
    }

    if (!this.columnConfigs) {
      throw Error('Input property columnConfigs must be provided');
    }
  }

  ngOnDestroy() {
    if (!this.subscription.closed) {
      this.subscription.unsubscribe();
    }
    this.subscription = Subscription.EMPTY;
  }

  onPageChanged(ev: PageEvent) {
    this.pageChanaged.emit(ev);
  }

  onSortChanged(sort: Sort) {
    console.log('<Sort>', sort.active + ' ' + sort.direction);
    this.sortChanged.emit(sort);
  }
}

/**
 * By default, the MatTableDataSource sorts with the assumption that
 * the sorted column's name matches the data property name that the
 * column displays.
 * Note that if the data properties do not match the column names, or
 * if a complex data property accessor is required, then a custom
 * sortingDataAccessor function can be set to override the default
 * data accessor on the MatTableDataSource.
 */