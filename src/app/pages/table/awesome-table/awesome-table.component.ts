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

  @Input() elevation: number = 8;
  @Input() contentAlign: 'start' | 'center' | 'end' = 'start';
  @Input() border: 'none' | 'vertical' | 'horizontal' | 'all' = 'horizontal';

  @Input() stickyHeader = false;

  @Input() sortable = false;
  @Input() filterable = false;
  @Input() filterPlaceholder: string;

  @Output() pageChanaged = new EventEmitter<PageEvent>();
  @Output() sortChanged = new EventEmitter<Sort>();

  dataSource: MatTableDataSource<TableCellModel> = new MatTableDataSource();
  displayedColumns: string[] = [];

  awesomeTable: AwesomeTableComponent;

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private subscription = new Subscription();

  get tableAdditionalClasses() {
    const contentAlignClass = {
      'content-align-start': this.contentAlign === 'start',
      'content-align-center': this.contentAlign === 'center',
      'content-align-end': this.contentAlign === 'end'
    };

    const borderClass = {
      'border-none': this.border === 'none',
      'border-vertical': this.border === 'vertical',
      // 'border-horizontal': this.border === 'horizontal',
      'border-all': this.border === 'all'
    };

    return {
      ...contentAlignClass,
      ...borderClass,
    }
  }

  set filterValue(value: string) {
    this.dataSource.filter = value;
  }

  get filterValue(): string {
    return this.dataSource.filter;
  }

  set filterProperty(property: string) {
    this.dataSource.filterPredicate = (data, filter: string) => {
      const transformedFilter = filter.trim().toLowerCase();

      if (!property) {
        const dataStr: string = Object.keys(data)
          .reduce((acc: string, key: string) => acc + data[key], '')
          .toLowerCase();

        return dataStr.indexOf(transformedFilter) != -1;
      }

      return (data[property] + '').toLowerCase().indexOf(transformedFilter) != -1;
    }

    this.dataSource.filter = this.filterValue;
  }

  get stickyColumnClass(): string {
    const start = this.columnConfigs.map(config => config.stickyStart).lastIndexOf(true);
    const end = this.columnConfigs.map(config => config.stickyEnd).indexOf(true);

    const startClass = start >= 0 ? `sticky-column-start-${start + 1}` : '';
    const endClass = end > 0 ? `sticky-column-end-${this.columnConfigs.length - end}` : '';

    return `${startClass} ${endClass}`.trim();
  }

  constructor() { }

  ngOnInit() {
    this.checkConfig();

    this.awesomeTable = this;

    this.subscription.add(
      this.data$.subscribe(data => {
        this.dataSource.data = data;
      })
    );

    this.displayedColumns = this.columnConfigs.map(config => config.name);
    // this.displayedColumns = [...this.displayedColumns, 'testID']

    if (this.showPaginator)
      this.dataSource.paginator = this.paginator;

    if (this.sortable)
      this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (data, sortHeaderId: string) => {
      if (sortHeaderId == 'testID')
        return data['name'];
      return data[sortHeaderId];
    }
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