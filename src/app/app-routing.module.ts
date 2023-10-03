import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeralComponent } from './layout/geral/geral.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: GeralComponent,
    children: [
      {
        path:'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((dashboard) => dashboard.DashboardModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
