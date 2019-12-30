import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { HomePageModule } from './pages/home-page';
import { TableModule } from './pages/table';
import { AnimationModule } from './pages/animation';
import { GridModule } from './pages/grid';
import { DialogModule } from './pages/dialog';
import { MenuModule } from './pages/menu';
import { RxModule } from './pages/rx/rx.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomePageModule,
    TableModule,
    AnimationModule,
    GridModule,
    DialogModule,
    MenuModule,
    // RxModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
