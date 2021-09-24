import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesSitioPageRoutingModule } from './detalles-sitio-routing.module';

import { DetallesSitioPage } from './detalles-sitio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesSitioPageRoutingModule
  ],
  declarations: [DetallesSitioPage]
})
export class DetallesSitioPageModule {}
