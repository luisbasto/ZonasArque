import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SitiosPage } from './sitios.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SitiosPageRoutingModule } from './sitios-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SitiosPageRoutingModule
  ],
  declarations: [SitiosPage]
})
export class SitiosPageModule {}
