import { NgModule } from '@angular/core';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SharedModule } from 'src/app/shared';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent],
  imports: [
    SharedModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
