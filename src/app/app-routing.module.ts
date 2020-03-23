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
    path: 'di',
    loadChildren: () => import('./pages/di').then(m => m.DIModule)
  },
  {
    path: 'other',
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
    path: 'form',
    loadChildren: () => import('./pages/form').then(m => m.FormModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    // scrollPositionRestoration: 'enabled',
    // scrollOffset: [0, 200],
    anchorScrolling: 'enabled'
    // https://stackoverflow.com/questions/52725394/router-anchorscrolling-does-not-work-with-materials-mat-sidenav-containerfulls
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
