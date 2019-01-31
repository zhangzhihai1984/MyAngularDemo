import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableRoutingModule } from './table-routing.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    SharedModule,
    TableRoutingModule,
  ]
})
export class TableModule { }
