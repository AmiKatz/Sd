import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiddurPage } from './siddur.page';
import { ShacharitComponent } from './shacharit/shacharit.component';
import { MinchaComponent } from './mincha/mincha.component';
import { ArvitComponent } from './arvit/arvit.component';
import { MusafComponent } from './musaf/musaf.component';

const routes: Routes = [
  {
    path: '',
    component: SiddurPage,
  },
  {
    path: 'shacharit',
    component: ShacharitComponent,
  },
  {
    path: 'mincha',
    component: MinchaComponent,
  },
  {
    path: 'arvit',
    component: ArvitComponent,
  },
  {
    path: 'musaf',
    component: MusafComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiddurPageRoutingModule {}
