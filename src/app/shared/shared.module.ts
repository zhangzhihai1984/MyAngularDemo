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
  MatGridListModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatRippleModule,
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
    ...MATERIAL_MODULES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES,
  ],
})
export class SharedModule { }
