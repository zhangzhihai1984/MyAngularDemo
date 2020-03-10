import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { DemoItemModule } from './demo-item';
import { ThemePickerModule } from './theme-picker';
import { DialogModule } from './dialog';

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
  MatSelectModule,
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
    DialogModule,
    ...MATERIAL_MODULES,
  ],
})
export class SharedModule { }
