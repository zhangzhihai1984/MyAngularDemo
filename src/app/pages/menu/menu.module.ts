import { NgModule } from '@angular/core';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuListComponent } from './menu-list/menu-list.component';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [MenuListComponent],
  imports: [
    SharedModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
