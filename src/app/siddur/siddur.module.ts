import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SiddurPage } from './siddur.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SiddurPageRoutingModule } from './siddur-routing.module';
import { ShacharitComponent } from './shacharit/shacharit.component';
import { MinchaComponent } from './mincha/mincha.component';
import { ArvitComponent } from './arvit/arvit.component';
import { MusafComponent } from './musaf/musaf.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SiddurPageRoutingModule
  ],
  declarations: [SiddurPage, ShacharitComponent,MinchaComponent, ArvitComponent,MusafComponent]
})
export class SiddurPageModule {}
