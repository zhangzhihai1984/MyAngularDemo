import { NgModule } from '@angular/core';
import { TableListComponent } from './table-list/table-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableRoutingModule } from './table-routing.module';
import { AwesomeTableComponent } from './awesome-table/awesome-table.component';

@NgModule({
  declarations: [
    TableListComponent,
    AwesomeTableComponent
  ],
  imports: [
    SharedModule,
    TableRoutingModule,
  ]
})
export class TableModule { }
