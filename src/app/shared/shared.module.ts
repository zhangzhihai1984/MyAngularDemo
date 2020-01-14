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
  MatCardModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatDialogModule,
  MatDividerModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSliderModule,
  MatSnackBarModule,
  MatSlideToggleModule
} from '@angular/material';
import { DemoItemModule } from './demo-item';
import { ThemePickerModule } from './theme-picker';

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
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatDialogModule,
  MatDividerModule,
  MatMenuModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSliderModule,
  MatSnackBarModule,
  MatSlideToggleModule,
]

@NgModule({
  imports: [
    // CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    // ThemePickerModule,
    // DemoItemModule,
    // ...MATERIAL_MODULES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemePickerModule,
    DemoItemModule,
    ...MATERIAL_MODULES,
  ],
})
export class SharedModule { }
