import { NgModule } from '@angular/core';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [HeroListComponent],
  imports: [
    SharedModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
