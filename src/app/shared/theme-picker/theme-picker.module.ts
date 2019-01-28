import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePickerComponent } from './theme-picker.component';
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  declarations: [ThemePickerComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  exports: [
    ThemePickerComponent
  ]
})
export class ThemePickerModule { }
