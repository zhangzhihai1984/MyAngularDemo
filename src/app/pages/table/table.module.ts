import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableRoutingModule } from './table-routing.module';
import { AwesomeTableComponent } from './awesome-table/awesome-table.component';

@NgModule({
  declarations: [
    TableComponent,
    AwesomeTableComponent
  ],
  imports: [
    SharedModule,
    TableRoutingModule,
  ]
})
export class TableModule { }
