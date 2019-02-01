import { NgModule } from '@angular/core';

import { GridRoutingModule } from './grid-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GridComponent } from './grid.component';

@NgModule({
  declarations: [GridComponent],
  imports: [
    SharedModule,
    GridRoutingModule
  ]
})
export class GridModule { }
