import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatTableModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  MatMenuModule,
  MatRippleModule,
  MatGridListModule,
  MatSidenavModule,
  MatCardModule
} from '@angular/material';
import { ThemePickerModule } from './theme-picker/theme-picker.module';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTableModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemePickerModule,
    ...MATERIAL_MODULES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemePickerModule,
    ...MATERIAL_MODULES,
  ],
})
export class SharedModule { }
