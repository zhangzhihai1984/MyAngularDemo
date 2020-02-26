import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterComponent } from './router.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';


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
      {
        path: 'admin',
        loadChildren: () => import('./admin').then(m => m.AdminModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./auth').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
