import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaComunicadosPageRoutingModule } from './lista-comunicados-routing.module';

import { ListaComunicadosPage } from './lista-comunicados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaComunicadosPageRoutingModule
  ],
  declarations: [ListaComunicadosPage]
})
export class ListaComunicadosPageModule {}
