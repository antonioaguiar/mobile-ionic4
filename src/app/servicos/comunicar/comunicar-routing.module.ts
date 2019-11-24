import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunicarPage } from './comunicar.page';

const routes: Routes = [
  {
    path: '',
    component: ComunicarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicarPageRoutingModule {}
