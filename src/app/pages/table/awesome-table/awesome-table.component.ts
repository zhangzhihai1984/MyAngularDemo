import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ViewChild,
  Output,
  EventEmitter,
  TemplateRef,
  ViewChildren,
  QueryList
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
import { detailRowAnimation } from './awesome-table.animation';
import { AwesomeDetailRowComponent } from '../awesome-detail-row/awesome-detail-row.component';

@Component({
  selector: 'app-awesome-table',
  templateUrl: './awesome-table.component.html',
  styleUrls: ['./awesome-table.component.scss'],
  animations: [detailRowAnimation]
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
  @Input() stickyColumnBorder = false;

  @Input() sortable = false;
  @Input() filterable = false;
  @Input() filterPlaceholder: string;

  @Input() detailRowTpl: TemplateRef<any>;

  @Output() pageChanaged = new EventEmitter<PageEvent>();
  @Output() sortChanged = new EventEmitter<Sort>();

  dataSource: MatTableDataSource<TableCellModel> = new MatTableDataSource();
  displayedColumns: string[] = [];

  awesomeTable: AwesomeTableComponent;

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren(AwesomeDetailRowComponent) detailRows: QueryList<AwesomeDetailRowComponent>;

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
    if (!this.stickyColumnBorder)
      return '';

    const start = this.columnConfigs.map(config => config.stickyStart).lastIndexOf(true);
    const end = this.columnConfigs.map(config => config.stickyEnd).indexOf(true);

    const startClass = start >= 0 ? `sticky-column-start-${start + 1}` : '';
    const endClass = end > 0 ? `sticky-column-end-${this.columnConfigs.length - end}` : '';

    return `${startClass} ${endClass}`.trim();
  }

  constructor() { }

  state = 'collapsed';

  onClick(row, i) {
    console.log('<Row>', row, i);
    console.log('<Row>', this.detailRows.length);
    console.log('<Row>', this.detailRows.toArray()[i].state);

    const state = this.detailRows.toArray()[i].state;

    this.detailRows.toArray()[i].state = state == 'collapsed' ? 'expanded' : 'collapsed';

    this.state = this.state == 'collapsed' ? 'expanded' : 'collapsed';
  }

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

/**
* Access the `ViewContainerRef` of an element by placing a `Directive` injected
* with `ViewContainerRef` on the element, or use a `ViewChild` query.
*
* ```
* <div myDirective>Get ViewContainerRef</div>
*
* @Directive({
*  selector: '[myDirective]'
* })
* export class MyDirective {
*    constructor(viewContainerRef: ViewContrainerRef) {}
* }
* ```
*
* ```
* <div #ref>Get ViewContainerRef</div>
*
* @Component({...})
* export class MyComponent {
*    @ViewChild('ref', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef
* }
* ```
*
* Access a `TemplateRef` instance by placing a directive on an `<ng-template>`
* element (or directive prefixed with `*`). The `TemplateRef` for the embeded view
* is injected into the consturctor of the directive, using the `TemplateRef` token.
*
* You can also use a `Query` to find a `TemplateRef` associated with
* a component or a directive.
*
* ```
* <div *myDirective>Get TemplateRef</div>
*
* <ng-template myDirective>
*    <div>Get TemplateRef</div>
* </ng-template>
*
* @Directive({
*  selector: '[myDirective]'
* })
* export class MyDirective {
*    constructor(viewContainerRef: ViewContrainerRef, templateRef: TemplateRef) {}
* }
* ```
*
* ```
* <ng-template #ref>
*    <div>Get TemplateRef</div>
* </ng-template>
*
* @Component({...})
* export class MyComponent {
*    @ViewChild('ref') templateRef: TemplateRef
* }
* ```
*
* ```
* <div *ngIf="condition then ref"></div>
*
* <ng-template #ref>
*    <div>Get TemplateRef</div>
* </ng-template>
* ```
*
*/

/**
 * The selector is a CSS selector.
 * - `foo` means elements with name `foo`
 * - `[foo]` means elements with an attribute named `foo`
 * - `.foo` means elements with a CSS class named `foo`
 * - `foo[bar]` means elements named foo with an attribute named `bar`
 */