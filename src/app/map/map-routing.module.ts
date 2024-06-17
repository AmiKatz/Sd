import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapPage } from './map.page';
import { TempleComponent } from './temple/temple.component';

const routes: Routes = [
  {
    path: '',
    component: MapPage,
  },
  {
    path: 'temple',
    component: TempleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapPageRoutingModule {}
