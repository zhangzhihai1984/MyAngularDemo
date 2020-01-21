import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterComponent } from './router.component';


const routes: Routes = [
  {
    path: '',
    component: RouterComponent,
    children: [
      {
        path: 'crisis-center',
        loadChildren: () => import('./crisis-center').then(m => m.CrisisCenterModule)
      },
      {
        path: '',
        redirectTo: 'heroes',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        loadChildren: () => import('./heroes').then(m => m.HeroesModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
