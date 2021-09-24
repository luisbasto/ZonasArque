import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesSitioPage } from './detalles-sitio.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesSitioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesSitioPageRoutingModule {}
