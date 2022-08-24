import { NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './core/components/layouts/account/account.component';
import { DashbordComponent } from './core/components/layouts/dashbord/dashbord.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account/login',
    pathMatch: 'full'
  },
  {
    path: 'account',
    component: AccountComponent,
    data: { pagetitle: 'Account Master Page' },
    children: [
      {
        path: 'login',
        data: { pagetitle: 'Login Page' },
        loadChildren: () => import('./pages/account/login/login.module').then(m => m.LoginModule)

      },
      {
        path: 'forgot-password',
        data: { pagetitle: 'Forgot Password Page' },
        loadChildren: () => import('./pages/account/login/login.module').then(m => m.LoginModule)

      }
    ]
  },

  {
    path: 'dashbord',
    component: DashbordComponent,
    data: { pagetitle: 'Dashbord Master Page' },
    children: [
      {
        path: '',
        data: { pagetitle: 'Dashbord Summary' },
        loadChildren: () => import('./pages/dashbord/summary/summary.module').then(m => m.SummaryModule)
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
