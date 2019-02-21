import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TableColumnConfig } from '../table.config';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { AwesomeTableComponent } from '../awesome-table/awesome-table.component';

@Component({
  selector: 'app-awesome-table-filter',
  templateUrl: './awesome-table-filter.component.html',
  styleUrls: ['./awesome-table-filter.component.scss']
})
export class AwesomeTableFilterComponent implements OnInit, OnDestroy {

  @Input() placeholder: string;
  @Input() columnConfigs: TableColumnConfig[];
  @Input() filterFor: AwesomeTableComponent;

  buttonText = 'ALL';

  form: FormGroup;
  private filter$: Observable<string>;

  private subscription = new Subscription();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      filter: ['']
    });

    this.filter$ = this.form.controls['filter'].valueChanges;
  }

  ngOnInit() {
    if (!this.filterFor) {
      throw Error('Input property filterFor must be provided');
    }

    this.subscription.add(this.filter$.pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
      .subscribe(filterValue => {
        console.log('<Filter>', filterValue);
        this.filterFor.filterValue = filterValue;
      })
    );
  }

  ngOnDestroy() {
    if (!this.subscription.closed) {
      this.subscription.unsubscribe();
    }
    this.subscription = Subscription.EMPTY;
  }

  clearFilter() {
    this.form.controls['filter'].setValue('');
  }

  switchFilter(columnConfig: TableColumnConfig) {
    if (!columnConfig) {
      this.buttonText = 'ALL';
      console.log('<Filter>', 'ALL');
    } else {
      this.buttonText = columnConfig.header || columnConfig.name;
      console.log('<Filter>', columnConfig.header);
    }
  }
}
