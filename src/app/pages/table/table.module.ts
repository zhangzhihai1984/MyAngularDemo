import { NgModule } from '@angular/core';
import { TableListComponent } from './table-list/table-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableRoutingModule } from './table-routing.module';
import { AwesomeTableComponent } from './awesome-table/awesome-table.component';
import { AwesomeTableFilterComponent } from './awesome-table-filter/awesome-table-filter.component';
import { AwesomeDetailRowComponent } from './awesome-detail-row/awesome-detail-row.component';

@NgModule({
  declarations: [
    TableListComponent,
    AwesomeTableComponent,
    AwesomeTableFilterComponent,
    AwesomeDetailRowComponent
  ],
  imports: [
    SharedModule,
    TableRoutingModule,
  ]
})
export class TableModule { }
