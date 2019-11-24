import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicarPageRoutingModule } from './comunicar-routing.module';

import { ComunicarPage } from './comunicar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComunicarPageRoutingModule
  ],
  declarations: [ComunicarPage]
})
export class ComunicarPageModule {}
