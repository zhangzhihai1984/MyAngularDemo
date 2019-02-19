import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoItemComponent } from './demo-item.component';

@NgModule({
  declarations: [DemoItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DemoItemComponent
  ]
})
export class DemoItemModule { }
