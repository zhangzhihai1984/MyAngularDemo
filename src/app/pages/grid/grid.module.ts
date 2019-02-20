import { NgModule } from '@angular/core';

import { GridRoutingModule } from './grid-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GridListComponent } from './grid-list/grid-list.component';
import { GridItemComponent } from './grid-item/grid-item.component';

@NgModule({
  declarations: [
    GridListComponent,
    GridItemComponent
  ],
  imports: [
    SharedModule,
    GridRoutingModule
  ]
})
export class GridModule { }
