import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapasPage } from './mapas.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MapasPageRoutingModule } from './mapas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MapasPageRoutingModule
  ],
  declarations: [MapasPage]
})
export class MapasPageModule {}
