import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PeriodicElement } from './table.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // data: PeriodicElement[] = ELEMENT_DATA;
  data$: Observable<PeriodicElement[]> = of(ELEMENT_DATA);
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.pipe(map(p => p))
      .subscribe(v => console.log('<Route>', '<Param>', v));

    this.route.data.pipe(map(v => v))
      .subscribe(v => console.log('<Route>', '<Data>', v));
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
