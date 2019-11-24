import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren:  () => import('../home/home.module').then( m => m.HomePageModule) 
          }
        ]
      },
      {
        path: 'servicos',
        children: [
          {
            path: '',
            loadChildren: () => import('../servicos/servicos.module').then( m => m.ServicosPageModule) 
          }
        ]
      },
      {
        path: 'sobre',
        children: [
          {
            path: '',
            loadChildren: () => import('../sobre/sobre.module').then( m => m.SobrePageModule)
          }
        ]
      }
    ]
  }
];
/*
,
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () => import('../../auth/login/login.module').then( m => m.LoginPageModule)
          }
        ]
      },
*/
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
