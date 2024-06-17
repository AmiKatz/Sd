import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HalchutPage } from './halchut.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HalchutPageRoutingModule } from './halchut-routing.module';




@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HalchutPageRoutingModule
  ],
  declarations: [HalchutPage]
})
export class HalchutPageModule {}
