import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './home-page.component';
import { HomeRoutingModule } from './home-page-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
})
export class HomePageModule { }
