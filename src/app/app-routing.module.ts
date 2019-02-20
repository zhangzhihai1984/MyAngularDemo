import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TableListComponent } from './pages/table/table-list/table-list.component';
import { TableGuard } from './pages/table/table-guard';
import { TableModule } from './pages/table';
import { AnimationModule } from './pages/animation';
import { GridModule } from './pages/grid';
import { DialogModule } from './pages/dialog';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
    data: { animState: 'HomePage' }
  },
  {
    path: 'table',
    // loadChildren: './pages/table#TableModule',
    loadChildren: () => TableModule,
    pathMatch: 'full'
  },
  {
    path: 'animation',
    loadChildren: () => AnimationModule,
    pathMatch: 'full'
  },
  {
    path: 'grid',
    loadChildren: () => GridModule,
    pathMatch: 'full'
  },
  {
    path: 'dialog',
    loadChildren: () => DialogModule,
    pathMatch: 'full'
  },
  {
    path: ':haha/demo',
    canActivate: [TableGuard],
    component: TableListComponent,
    data: { key: 'value' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
