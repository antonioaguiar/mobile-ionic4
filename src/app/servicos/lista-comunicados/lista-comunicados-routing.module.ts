import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComunicadosPage } from './lista-comunicados.page';

const routes: Routes = [
  {
    path: '',
    component: ListaComunicadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaComunicadosPageRoutingModule {}
