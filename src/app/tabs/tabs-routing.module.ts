import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'sitios',
        loadChildren: () => import('../sitios/sitios.module').then(m => m.SitiosPageModule)
      },
      {
        path: 'mapas',
        loadChildren: () => import('../mapas/mapas.module').then(m => m.MapasPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/sitios',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/sitios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
