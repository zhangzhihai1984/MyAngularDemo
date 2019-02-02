import { NgModule } from '@angular/core';

import { GridRoutingModule } from './grid-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GridComponent } from './grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';

@NgModule({
  declarations: [GridComponent, GridItemComponent],
  imports: [
    SharedModule,
    GridRoutingModule
  ]
})
export class GridModule { }
