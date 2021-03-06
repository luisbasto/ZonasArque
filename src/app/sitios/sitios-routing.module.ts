import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitiosPage } from './sitios.page';

const routes: Routes = [
  {
    path: '',
    component: SitiosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitiosPageRoutingModule {}
