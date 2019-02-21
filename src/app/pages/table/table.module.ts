import { NgModule } from '@angular/core';
import { TableListComponent } from './table-list/table-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableRoutingModule } from './table-routing.module';
import { AwesomeTableComponent } from './awesome-table/awesome-table.component';
import { AwesomeTableFilterComponent } from './awesome-table-filter/awesome-table-filter.component';

@NgModule({
  declarations: [
    TableListComponent,
    AwesomeTableComponent,
    AwesomeTableFilterComponent
  ],
  imports: [
    SharedModule,
    TableRoutingModule,
  ]
})
export class TableModule { }
