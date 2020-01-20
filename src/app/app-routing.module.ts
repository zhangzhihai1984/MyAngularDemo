import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'table',
    // loadChildren: './pages/table#TableModule',
    // loadChildren: () => TableModule,
    loadChildren: () => import('./pages/table').then(m => m.TableModule),
    pathMatch: 'full'
  },
  {
    path: 'animation',
    loadChildren: () => import('./pages/animation').then(m => m.AnimationModule),
    pathMatch: 'full'
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/grid').then(m => m.GridModule),
    pathMatch: 'full'
  },
  {
    path: 'dialog',
    loadChildren: () => import('./pages/dialog').then(m => m.DialogModule),
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu').then(m => m.MenuModule),
    pathMatch: 'full'
  },
  {
    path: 'rx',
    loadChildren: () => import('./pages/rx').then(m => m.RxModule)
  },
  {
    path: 'other/:id',
    loadChildren: () => import('./pages/other').then(m => m.OtherModule)
  },
  {
    path: 'other/:id/:id2',
    loadChildren: () => import('./pages/other').then(m => m.OtherModule)
  },
  // {
  //   path: ':haha/:demo',
  //   canActivate: [TableGuard],
  //   component: TableListComponent,
  //   data: { key: 'value' }
  // },
  {
    path: 'router',
    loadChildren: () => import('./pages/router').then(m => m.RouterModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
